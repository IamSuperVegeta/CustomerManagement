import React from "react";
import {Dimmer, Loader } from "semantic-ui-react";

export const LoadingComponents: React.FC<{
  content?: string;
  inverted?: boolean;
}> = ({ inverted = true, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader size="massive" content={content} />
    </Dimmer>
  );
};
export default LoadingComponents;
