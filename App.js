//  .......... importando componentes ..........
import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//  .......... aplicação ..........
type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props)
        this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
        this.calcular = this.calcular.bind(this)
    }
    
    calcular(){
        let imc = this.state.massa / (this.state.altura * this.state.altura )
        let s = this.state
        s.resultado = imc
        if (s.resultado < 16){
            s.resultadoText = "Magreza Grave"
        } else if (s.resultado < 17){
            s.resultadoText = "Magreza Moderada"
        } else if (s.resultado < 18.5){
            s.resultadoText = "Magreza Leve"
        } else if (s.resultado < 25){
            s.resultadoText = "Saudável"
        } else if (s.resultado < 30){
            s.resultadoText = "Sobrepeso"
        } else if (s.resultado < 35){
            s.resultadoText = "Obesidade grau I"
        } else if (s.resultado < 40){
            s.resultadoText = "Obesidade grau II"
        } else{
            s.resultadoText = "Obesidade grau III"
        }
        this.setState(s) 
    }
    
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.header}>
                  Digite seus dados e calcule o IMC
                </Text>
            </View>
            <View style={styles.entradas}>
                <TextInput placeholder="Massa (em kg - ex: 80)" keyboardType="numeric" style={styles.input} onChangeText={(massa) => {this.setState({massa})}} />
                <TextInput placeholder="Altura (em m - ex: 1.70)" keyboardType="numeric" style={styles.input} onChangeText={(altura) => {this.setState({altura})}} />
            </View>
            <TouchableOpacity style={styles.button} onPress={this.calcular}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <View style={styles.boxResultado}>
              <Text style={styles.resultado}>Resultado:</Text>
              <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
              <Text style={[styles.resultado, {fontSize: 30}]}>{this.state.resultadoText}</Text>            
            </View>
        </View>
        );
    }
}

//  .......... estilos ..........
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#575757',
    },
    boxResultado:{
      marginTop: 20,
      borderTopWidth: 2,
    },
    headerView:{
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    header:{
        color: '#fff',
        marginTop: 30,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    entradas:{
        color: '#fff',
        flexDirection: 'column',
    },
    input:{
        fontSize: 25,
        height: 80,
        textAlign:'center',
        justifyContent: 'center',
        width: '100%',
        color: '#d9d9d9'
    },
    button:{
        backgroundColor:'#00a63a',
        width: '60%',
        alignSelf: 'center',
    },
    buttonText:{
        alignSelf: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },
    resultado:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 25,
        padding: 15,
    },

});
