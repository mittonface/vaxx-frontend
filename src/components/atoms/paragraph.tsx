import React from "react";

type ParagraphProps = {
  children: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p>{children}</p>
);
