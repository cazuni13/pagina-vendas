import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
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
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.02;
  shadow-radius: 1px;
  elevation: 1;
`;

const ExportText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #4b5563;
`;

const SearchWrapper = styled.View`
  margin-horizontal: 16px;
  margin-bottom: 16px;
`;

const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #e5e7eb;
  border-radius: 6px;
  padding-horizontal: 12px;
  height: 48px;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #1f2937;
  padding-horizontal: 8px;
  height: 100%;
`;

const FilterIconWrapper = styled.TouchableOpacity`
  border-left-width: 1px;
  border-left-color: #e5e7eb;
  padding-left: 12px;
  margin-left: 4px;
  height: 24px;
  justify-content: center;
`;

const CardsWrapper = styled.View`
  padding-horizontal: 16px;
  gap: 12px;
`;

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

export default function DashboardScreen() {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState<'aprovadas' | 'todas'>('aprovadas');

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

      <SearchWrapper>
        <SearchInputContainer>
          <Feather name="search" size={18} color="#9ca3af" />
          <StyledInput
            placeholder="Buscar por produto ou cliente..."
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={setSearchText}
            clearButtonMode="while-editing"
          />
          <FilterIconWrapper activeOpacity={0.7}>
            <Feather name="sliders" size={18} color="#9ca3af" />
          </FilterIconWrapper>
        </SearchInputContainer>
      </SearchWrapper>

      <CardsWrapper>
        <CardContainer>
          <CardTitle>Vendas encontradas</CardTitle>
          <CardValue>70</CardValue>
        </CardContainer>
        <CardContainer>
          <CardTitle>Valor líquido</CardTitle>
          <CardValue>R$ 409,72</CardValue>
        </CardContainer>
      </CardsWrapper>

      <TabsContainer>
        <TabButton isActive={activeTab === 'aprovadas'} onPress={() => setActiveTab('aprovadas')}>
          <TabButtonText isActive={activeTab === 'aprovadas'}>Aprovadas</TabButtonText>
        </TabButton>
        <TabButton isActive={activeTab === 'todas'} onPress={() => setActiveTab('todas')}>
          <TabButtonText isActive={activeTab === 'todas'}>Todas</TabButtonText>
        </TabButton>
      </TabsContainer>
    </ScreenContainer>
  );
}