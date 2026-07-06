import { CardResumo } from '@/components/CardResumo';
import { FiltroStatus } from '@/components/FiltroStatus';
import { ItemVenda, SaleItem } from '@/components/ItemVenda';
import { Feather } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import { FlatList, Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const PRODUCTS = [
  { name: 'VIRE O JOGO', price: 197.00 },
  { name: 'COMUNICAÇÃO EM PÚBLICO', price: 97.00 },
  { name: 'FÓRMULA NEGÓCIO ONLINE', price: 297.00 },
  { name: 'MÉTODO AVANÇADO', price: 497.00 },
];

const CLIENTS = [
  { name: 'ELIELSON BASTOS', email: 'elielson.bastos@hotmail.com' },
  { name: 'Adson M. G.', email: 'adson.gomes@gmail.com' },
  { name: 'Riquelme Silva', email: 'riquelme.dev@gmail.com' },
  { name: 'Silas Oliveira', email: 'silas.oliver@gmail.com' },
  { name: 'Darian Castro', email: 'darian.castro@gmail.com' },
  { name: 'Stedson Souza', email: 'stedson.souza@outlook.com' },
  { name: 'BRUNO GOMES', email: 'bruno.gomes@live.com' },
  { name: 'Wallace Araujo', email: 'wallace.araujo@gmail.com' },
  { name: 'Yago Vitor', email: 'yago.vitor@gmail.com' },
  { name: 'andre alves', email: 'andre.alves@yahoo.com.br' },
  { name: 'Carlos Eduardo', email: 'carlos.eduardo@gmail.com' },
  { name: 'Pedro Henrique', email: 'pedro.henrique@gmail.com' },
  { name: 'Gabriel Ribeiro', email: 'gabriel.ribeiro@gmail.com' },
  { name: 'Thiago Mendes', email: 'thiago.mendes@gmail.com' },
  { name: 'Nathan Ferraz', email: 'nathan.ferraz@outlook.com' },
  { name: 'GUSTAVO SILVA', email: 'gustavo.silva@hotmail.com' },
  { name: 'Dennys Oliveira', email: 'dennys.oliveira@gmail.com' },
  { name: 'Aline Souza', email: 'aline.souza@gmail.com' },
  { name: 'Beatriz Costa', email: 'beatriz.costa@hotmail.com' },
  { name: 'Marcos Vinicius', email: 'marcos.v@gmail.com' },
];

const MOCK_SALES: SaleItem[] = Array.from({ length: 40 }, (_, index) => {
  const client = CLIENTS[index % CLIENTS.length];
  const productObj = PRODUCTS[index % PRODUCTS.length];
  
  const day = String(29 - (index % 28)).padStart(2, '0');
  const month = String(11 - (index % 5)).padStart(2, '0');
  const date = `${day}/${month}/2025`;

  const approved = index % 5 !== 0;

  return {
    id: String(index + 1),
    date,
    product: productObj.name,
    clientName: client.name,
    clientEmail: client.email,
    price: productObj.price,
    approved,
  };
});

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

const ScarcityContainer = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  border-width: 1px;
  border-color: #e5e7eb;
  padding: 16px;
  margin-horizontal: 16px;
  margin-top: 12px;
  margin-bottom: 4px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.03;
  shadow-radius: 2px;
  elevation: 1;
`;

const ScarcityTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;

const ScarcityRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ScarcityValueContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`;

const ScarcityNumber = styled.Text<{ low: boolean }>`
  font-size: 32px;
  font-weight: 800;
  color: ${props => props.low ? '#ef4444' : '#007f5f'};
`;

const ScarcityUnit = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`;

const ScarcityControls = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const ScarcityButton = styled.TouchableOpacity<{ variant: 'dec' | 'inc' }>`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.variant === 'dec' ? '#f3f4f6' : '#007f5f'};
  border-width: ${props => props.variant === 'dec' ? '1px' : '0px'};
  border-color: #d1d5db;
`;

const ScarcityButtonText = styled.Text<{ variant: 'dec' | 'inc' }>`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.variant === 'dec' ? '#4b5563' : '#ffffff'};
`;

const TableHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e7eb;
  background-color: #f8f9fa;
  margin-top: 10px;
`;

const TableHeaderLabel = styled.Text<{ width: string; align?: string }>`
  width: ${props => props.width};
  font-size: 11px;
  font-weight: 700;
  color: #9ca3af;
  text-align: ${props => props.align || 'left'};
  letter-spacing: 0.5px;
`;

const ListSeparator = styled.View`
  height: 1px;
  background-color: #f3f4f6;
`;

const EmptyStateContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`;

const EmptyStateText = styled.Text`
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
`;

export default function DashboardScreen() {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState<'aprovadas' | 'todas'>('aprovadas');
  const [vagas, setVagas] = useState(15);

  const handleIncrementVagas = () => {
    setVagas(prev => prev + 1);
  };

  const handleDecrementVagas = () => {
    setVagas(prev => (prev > 0 ? prev - 1 : 0));
  };

  const filteredSales = useMemo(() => {
    const query = searchText.toLowerCase();
    return MOCK_SALES.filter(sale => {
      const matchesTab = activeTab === 'todas' || sale.approved;
      const matchesSearch = 
        sale.product.toLowerCase().includes(query) ||
        sale.clientName.toLowerCase().includes(query) ||
        sale.clientEmail.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchText]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const totalSalesCount = filteredSales.length;

  const totalLiquidValue = useMemo(() => {
    const approvedFiltered = filteredSales.filter(sale => sale.approved);
    return approvedFiltered.reduce((sum, item) => sum + item.price, 0);
  }, [filteredSales]);

  const goalProgressPercentage = 40;

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
            <GoalProgressFill progress={goalProgressPercentage} />
          </GoalProgressBg>
        </HeaderRight>
      </HeaderBackground>

      <FlatList
        data={filteredSales}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemVenda item={item} />}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListHeaderComponent={
          <>
            <TitleSection>
              <ScreenTitle>Vendas</ScreenTitle>
              <ExportButton activeOpacity={0.7} onPress={() => alert('Exportando transações...')}>
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
              <CardResumo 
                titulo="Vendas encontradas" 
                valor={totalSalesCount} 
              />
              <CardResumo 
                titulo="Valor líquido" 
                valor={formatCurrency(totalLiquidValue)} 
              />
            </CardsWrapper>

            <ScarcityContainer>
              <ScarcityTitle>Controle de Escassez (Vagas do Lote)</ScarcityTitle>
              <ScarcityRow>
                <ScarcityValueContainer>
                  <ScarcityNumber low={vagas <= 5}>{vagas}</ScarcityNumber>
                  <ScarcityUnit>vagas restantes</ScarcityUnit>
                </ScarcityValueContainer>
                <ScarcityControls>
                  <ScarcityButton 
                    variant="dec" 
                    onPress={handleDecrementVagas}
                    activeOpacity={0.7}
                  >
                    <ScarcityButtonText variant="dec">-1</ScarcityButtonText>
                  </ScarcityButton>
                  <ScarcityButton 
                    variant="inc" 
                    onPress={handleIncrementVagas}
                    activeOpacity={0.7}
                  >
                    <ScarcityButtonText variant="inc">+1</ScarcityButtonText>
                  </ScarcityButton>
                </ScarcityControls>
              </ScarcityRow>
            </ScarcityContainer>

            <FiltroStatus 
              activeTab={activeTab} 
              onChangeTab={setActiveTab} 
            />

            <TableHeaderContainer>
              <TableHeaderLabel width="25%">DATA</TableHeaderLabel>
              <TableHeaderLabel width="35%">PRODUTO</TableHeaderLabel>
              <TableHeaderLabel width="40%">CLIENTE</TableHeaderLabel>
            </TableHeaderContainer>
          </>
        }
        ListEmptyComponent={
          <EmptyStateContainer>
            <Feather name="info" size={32} color="#9ca3af" />
            <EmptyStateText>Nenhuma transação encontrada</EmptyStateText>
          </EmptyStateContainer>
        }
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </ScreenContainer>
  );
}