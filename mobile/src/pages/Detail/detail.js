import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import style from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const msg = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Depressão" com o valor de R$1200';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói da Depressão',
            recipients: ['mmascarenhs@yahoo.com'],
            body: msg
        });
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=37991763461&text=${msg}`);
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}> 
                    <Feather name="arrow-left" size={28} color="#E82041"/> 
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={[style.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={style.incidentValue}>APAD</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>AAAAAA TO COM DEPRESSÃO EM</Text>

                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={style.incidentValue}>R$1800</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o Dia!</Text>
                <Text style={style.heroTitle}>Seja o Herói deste caso.</Text>
                <Text style={style.heroDescription}>Entre em Contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsApp}>
                        <Text style={style.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}