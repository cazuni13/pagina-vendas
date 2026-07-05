import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const ScreenContainer = styled.View`
  flex: 1;
  background-color: #f8f9fa;
`;

const HeaderBackground = styled.View`
  background-color: #007f5f;
  padding-top: ${Platform.OS === 'ios' ? '60px' : '45px'};
  padding-bottom: 16px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.TouchableOpacity`
  padding: 4px;
`;

const HeaderRight = styled.View`
  align-items: flex-end;
`;

const GoalText = styled.Text`
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const GoalProgressBg = styled.View`
  width: 90px;
  height: 4px;
  background-color: #005f43;
  border-radius: 2px;
  overflow: hidden;
`;

const GoalProgressFill = styled.View<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 2px;
`;

const TitleSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  padding-top: 20px;
  padding-bottom: 16px;
`;

const ScreenTitle = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: #1f2937;
`;

const ExportButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #e5e7eb;
  border-radius: 6px;
  padding-vertical: 8px;
  padding-horizontal: 12px;
  gap: 6px;
`;

const ExportText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #4b5563;
`;

export default function DashboardScreen() {
  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" backgroundColor="#007f5f" />
      
      <HeaderBackground>
        <HeaderLeft activeOpacity={0.7}>
          <Feather name="menu" size={24} color="#ffffff" />
        </HeaderLeft>

        <HeaderRight>
          <GoalText>R$ 4,0K / R$ 10K</GoalText>
          <GoalProgressBg>
            <GoalProgressFill progress={40} />
          </GoalProgressBg>
        </HeaderRight>
      </HeaderBackground>

      <TitleSection>
        <ScreenTitle>Vendas</ScreenTitle>
        <ExportButton activeOpacity={0.7}>
          <Feather name="file-text" size={15} color="#4b5563" />
          <ExportText>Exportar</ExportText>
        </ExportButton>
      </TitleSection>
    </ScreenContainer>
  );
}