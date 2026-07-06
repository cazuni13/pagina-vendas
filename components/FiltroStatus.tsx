import React from 'react';
import styled from 'styled-components/native';

interface FiltroStatusProps {
  activeTab: 'aprovadas' | 'todas';
  onChangeTab: (tab: 'aprovadas' | 'todas') => void;
}

const TabsContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 16px;
  margin-vertical: 14px;
  gap: 12px;
`;

const TabButton = styled.TouchableOpacity<{ isActive: boolean }>`
  background-color: ${props => props.isActive ? '#e8edff' : 'transparent'};
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const TabButtonText = styled.Text<{ isActive: boolean }>`
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.isActive ? '#3b5998' : '#9ca3af'};
`;

export const FiltroStatus: React.FC<FiltroStatusProps> = ({ activeTab, onChangeTab }) => (
  <TabsContainer>
    <TabButton isActive={activeTab === 'aprovadas'} onPress={() => onChangeTab('aprovadas')}>
      <TabButtonText isActive={activeTab === 'aprovadas'}>Aprovadas</TabButtonText>
    </TabButton>
    <TabButton isActive={activeTab === 'todas'} onPress={() => onChangeTab('todas')}>
      <TabButtonText isActive={activeTab === 'todas'}>Todas</TabButtonText>
    </TabButton>
  </TabsContainer>
);