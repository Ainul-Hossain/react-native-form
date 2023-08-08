import React from 'react';
import {Text, StyleSheet} from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const SignUpForm = () => {
    return (
        <>
            <FormContainer>
                <FormInput title='Full Name' placeholder='Enter Your Name'/>
                <FormInput title='Email' placeholder='example@email.com'/>
                <FormInput title='Password' placeholder='*****'/>
                <FormInput title='Confirm Password' placeholder='*****'/>
                <FormSubmitButton title="Sign Up"/>
            </FormContainer>
        </>
    );
};

const styles = StyleSheet.create({
})

export default SignUpForm;