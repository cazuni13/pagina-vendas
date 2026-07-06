import React from 'react';
import styled from 'styled-components/native';

interface CardResumoProps {
  titulo: string;
  valor: string | number;
}

const CardContainer = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  border-width: 1px;
  border-color: #e5e7eb;
  padding: 16px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.03;
  shadow-radius: 2px;
  elevation: 1;
`;

const CardTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

const CardValue = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
`;

export const CardResumo: React.FC<CardResumoProps> = ({ titulo, valor }) => (
  <CardContainer>
    <CardTitle>{titulo}</CardTitle>
    <CardValue>{valor}</CardValue>
  </CardContainer>
);