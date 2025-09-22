import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
