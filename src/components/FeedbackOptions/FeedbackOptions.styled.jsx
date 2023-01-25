import styled from '@emotion/styled';

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  font-weight: 600;
  width: 130px;
  padding: 10px;
  font-size: 20px;

  cursor: pointer;

  border-radius: 8px;

  &:hover {
    background-color: ${props => {
      console.log(props);
      switch (props.id) {
        case 'good':
          return 'green';

        case 'neutral':
          return 'orange';

        case 'bad':
          return 'red';

        default:
          return 'red';
      }
    }};

    box-shadow: ${props => {
      console.log(props);
      switch (props.id) {
        case 'good':
          return '0px 0px 10px 5px rgba(0,255,0,1)';

        case 'neutral':
          return '0px 0px 10px 5px rgba(255,145,0,1)';

        case 'bad':
          return '0px 0px 10px 5px rgba(255,0,0,1)';

        default:
          return '0px 0px 10px 5px rgba(184,184,184,1)';
      }
    }};
  }
`;

// options={['good', 'neutral', 'bad']
