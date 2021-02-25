import styled, { DefaultTheme }   from "styled-components/native";
import { ButtonContainer } from './../../components/GuessNumber/ButtonContainer'

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
    primaryColor: '#333'
};

export const darkTheme: DefaultTheme = {
    primaryColor: '#fff'
};

export const DefaultButton = styled.Button`

  /* Color the border and text with theme.main */
  color: ${props => props.theme.primaryColor};
`;

DefaultButton.defaultProps = {
   theme: {
     primaryColor: "red"
   }
}

export const ButtonTheme: DefaultTheme = {
  primaryColor: "red"
};

export const MyText = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
`;

export const YourText = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export const Heading = styled.Text<{ active: boolean,  }>`
color: ${props => (props.active ? 'red' : 'blue')};
`;

export const BetterButton = styled(ButtonContainer)<{ active: boolean,  }>`
color: ${props => (props.active ? 'red' : 'blue')};
`;