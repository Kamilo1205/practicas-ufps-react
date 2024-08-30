import { ChangeEvent, forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { HiMagnifyingGlass, HiXCircle } from 'react-icons/hi2';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  inputClassName?: string;
  onChange: (value: string | number | readonly string[] | undefined) => void;
}

export const InputSearch = forwardRef<HTMLInputElement, InputProps>(({ className, inputClassName, onChange, value = '', ...props }, ref) => {
  const [inputValue, setInputValue] = useState<string | number | readonly string[]>(value);
  const [debouncedValue] = useDebounceValue<string | number | readonly string[]>(inputValue, 400);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handleClear = () => setInputValue('');

  return (
    <>
      <div className={cn("relative flex items-center", className)}>
        <HiMagnifyingGlass className="absolute left-3 text-gray-500"/>
        <input
          type="text"
          className={cn(
            "flex h-8 w-full rounded-md border border-input bg-transparent px-9 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            inputClassName
          )}
          ref={ref}
          value={inputValue}
          onChange={handleChange}
          {...props}
        />
        {
          inputValue && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <HiXCircle className="text-lg" />
            </button>
          )
        }
      </div>
    </>
  );
});
