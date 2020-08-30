import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistDetailsStyles = styled.div.attrs({
  className:
    'w-2/3 h-64 flex flex-row ml-4 mt-1 text-gray-300 text-center text-2xl',
})`
  & {
    span {
      ${tw`text-gray-400`}
    }
  }
`;

export default ArtistDetailsStyles;