import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

interface ResultsProps {
  requests: any[];
}

const Results: React.FC<ResultsProps> = ({ requests }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 
    xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      {requests.map((result, i: number) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
