import React, { useState } from 'react';
import Avvvatars from 'avvvatars-react';

interface AvatarProps {
  imgUrl?: string;
  email: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imgUrl, email }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      {
        imgUrl && !imageError ? 
        (
          <img 
            src={imgUrl} 
            alt="User Avatar" 
            onError={handleImageError} 
            className="size-9 rounded-full object-cover"
          />
        )
        : ( <Avvvatars value={email} size={38}/> )
      }
    </div>
  );
};
