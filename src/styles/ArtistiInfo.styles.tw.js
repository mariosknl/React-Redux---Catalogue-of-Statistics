import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistInfoStyles = styled.div.attrs({
  className: 'w-screen h-auto text-center box-border',
})`
  & {
    h2 {
      ${tw`font-mono mt-4 text-5xl underline font-bold text-gray-400`}
    }
    p {
      ${tw`w-1/2 font-mono text-base no-underline`}
    }
    img {
      ${tw`w-1/2`}
    }
  }
`;

export default ArtistInfoStyles;
