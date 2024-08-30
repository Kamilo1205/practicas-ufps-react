import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input, InputProps } from './Input';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

export const InputWithToggle: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : type}
        className={cn("pr-10", className)}
        ref={ref}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          tabIndex={-1}
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
        >
          {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
        </button>
      )}
    </div>
  );
});

InputWithToggle.displayName = "InputWithToggle";
