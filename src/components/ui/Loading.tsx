import { PiSpinnerGapThin } from 'react-icons/pi';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PiSpinnerGapThin className="size-12 text-gray-900 animate-spin"/>
    </div>
  );
};
