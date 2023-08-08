import React from 'react';
import {StyleSheet} from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const LoginForm = () => {
    return (
        <>
            <FormContainer>
                <FormInput title='Email' placeholder='example@gmail.com'/>
                <FormInput title='Password' placeholder='********'/>
                <FormSubmitButton title="Login"/>
            </FormContainer>
        </>
    );
};

const styles = StyleSheet.create({
});

export default LoginForm;