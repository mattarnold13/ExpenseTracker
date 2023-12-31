import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

import Input from './Input';
import Button from '../UI/Button';

function ExpenseForm( { submitButtonLabel, onCancel, onSubmit }) {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {

    }


    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount,
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date,
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description,
                    // autoCapitalize: 'none'
                    // autoCorrect: false // default is true
                }}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});