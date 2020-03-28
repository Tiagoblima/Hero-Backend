import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


export default function Detail(){
    const rounte = useRoute();
    const incident = rounte.params.incident;
   

    navigation = useNavigation();
    function navigateBack(){
        navigation.goBack();
    }

    const message = `Olá ${incident.name}, estou querendo ajudar.
    no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', {
        style:'currency', currency:'BRL'
    }).format(incident.value)}`;

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients:[incident.email],
            body:message,
        });
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }
    return (
        <View style={styles.container}>

            <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue, {marginTop:0}}>{incident.name}
                de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{
                Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                }).format(incident.value)}
                </Text>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => NavigateBack()}>
                    <Text style={styles.detailsButtonText}>Ver Mais Detalhes</Text>
                    <Feather name="arrow-right" size={16}
                        color="#E02041"/>
                </TouchableOpacity>
          <View style={styles.contactBox}>
              <Text style={styles.heroTitle}>Salve o dia!</Text>
              <Text style={styles.heroTitle}>Seja o herói nesse caso.</Text>

              <Text style={styles.heroDescription}>Entre em Contato:</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                    <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={sendMail}>
                    <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}