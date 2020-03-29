import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import api from '../services/api';
import style from './styles';

export default function Incidents(){

    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    async function loadIncidents(){
        const response = await api.get('incidents');
        
        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    function navigateToDatail(){
        navigation.navigate('Detail');
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}> 0 casos </Text>.
                </Text>
            </View>
            <Text style={style.Title}>Bem Vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia</Text>    

            <FlatList 
                data={incidents}
                style={style.incidentsList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={style.incident}>
                        <Text style={style.incidentProperty}>ONG:</Text>
                        <Text style={style.incidentValue}>{incident.name}</Text>

                        <Text style={style.incidentProperty}>CASO:</Text>
                        <Text style={style.incidentValue}>{incident.title}</Text>

                        <Text style={style.incidentProperty}>VALOR:</Text>
                        <Text style={style.incidentValue}>{incident.value}</Text>

                        <TouchableOpacity 
                        style={style.detailsButton} 
                        onPress={ navigateToDatail }>
                            
                            <Text style={style.detailsButtonText}>Ver Mais Detalhes</Text> 
                            <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}