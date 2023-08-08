import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

const FormSubmitButton = ({title}) => {
    return (
        <TouchableOpacity style={styles.container} >
            <Text style={{fontSize: 18, color: '#fff'}} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'rgba(27, 27, 51, 0.4)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FormSubmitButton;