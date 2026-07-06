import React from 'react';
import styled from 'styled-components/native';

export interface SaleItem {
  id: string;
  date: string;
  product: string;
  clientName: string;
  clientEmail: string;
  price: number;
  approved: boolean;
}

interface ItemVendaProps {
  item: SaleItem;
}

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 16px;
  padding-horizontal: 16px;
  background-color: #ffffff;
`;

const DateColumn = styled.Text`
  width: 25%;
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
`;

const ProductColumn = styled.Text`
  width: 35%;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`;

const ClientColumn = styled.View`
  width: 40%;
`;

const ClientNameText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #1f2937;
`;

const ClientEmailText = styled.Text`
  font-size: 10px;
  color: #9ca3af;
  margin-top: 2px;
`;

export const ItemVenda: React.FC<ItemVendaProps> = ({ item }) => (
  <RowContainer>
    <DateColumn>{item.date}</DateColumn>
    <ProductColumn numberOfLines={2}>{item.product}</ProductColumn>
    <ClientColumn>
      <ClientNameText numberOfLines={1}>{item.clientName}</ClientNameText>
      <ClientEmailText numberOfLines={1}>{item.clientEmail}</ClientEmailText>
    </ClientColumn>
  </RowContainer>
);