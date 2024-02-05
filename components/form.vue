<template>
  <ClientOnly>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="border">
        <div class="input_block">
          <label for="name">FAMILIENNAME (in Blockschrift):</label>
          <Field name="name" type="text" id="name" v-model="name"/>
          <ErrorMessage name="name"/>
        </div>
        <div class="input_block">
          <label for="last_name">VORNAME lt. Geburtsurkunde (bei Fremden laut Reisepass):</label>
          <Field name="last_name" type="text" id="last_name" v-model="lastName"/>
          <ErrorMessage name="last_name"/>
        </div>
        <div class="input_block">
          <label for="birthday_date">GEBURTSDATUM:</label>
          <VueDatePicker name="birthday_date" required v-model="birthdayDate" locale="de" :enable-time-picker="false"/>
          <ErrorMessage name="birthday_date"/>
        </div>
      </div>
      <div class="border">
        <div class="title">Reisepass, Personalausweis</div>
        <div class="row">
          <div class="input_block">
            <label for="passport_number">Nummer:</label>
            <Field name="passport_number" type="text" id="passport_number" v-model="passportNumber"/>
            <ErrorMessage name="passport_number"/>
          </div>

          <div class="input_block">
            <label for="passport_issue_date">Ausstellungsdatum:</label>
            <VueDatePicker name="passport_issue_date" v-model="passportIssueDate" locale="de"
                           :enable-time-picker="false" required/>
            <ErrorMessage name="passport_issue_date"/>
          </div>

          <div class="input_block">
            <label for="passport_issuer">Ausstellende Behörde, Staat:</label>
            <Field name="passport_issuer" type="text" id="passport_issuer" v-model="passportIssuer"/>
            <ErrorMessage name="passport_issuer"/>
          </div>
        </div>
      </div>

      <div class="border">
        <div class="title">ANMELDUNG der Unterkunft in</div>
        <div class="row address">
          <div class="input_block">
            <label for="street">Straße (Platz) bzw. Ort ohne Straßennamen:</label>
            <Field name="street" type="text" id="street" v-model="street"/>
            <ErrorMessage name="street"/>
          </div>
          <div class="input_block">
            <label for="house_number">Haus Nr.:</label>
            <Field name="number" type="number" id="house_number" v-model="houseNumber"/>
            <ErrorMessage name="number"/>
          </div>
          <div class="input_block">
            <label for="door_number">Tür Nr.:</label>
            <Field name="doorNumber" type="number" id="door_number" v-model="doorNumber"/>
            <ErrorMessage name="doorNumber"/>
          </div>
        </div>
      </div>
      <button type="submit">Senden</button>
    </Form>
  </ClientOnly>
</template>

<script setup>
import {ref} from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import {Form, Field, ErrorMessage} from 'vee-validate'; // Add import statement for ErrorMessage
import {object, string, number} from 'yup';

const schema = object({
  name: string().required(),
  last_name: string().required(),
  passport_number: string().required(),
  passport_issuer: string().required(),
  street: string().required(),
  number: number().required().integer(),
  doorNumber: number().required().integer(),
});

const name = ref('');
const lastName = ref('');
const birthdayDate = ref(new Date());
const passportNumber = ref('');
const passportIssueDate = ref(new Date());
const passportIssuer = ref('');
const street = ref('');
const houseNumber = ref('');
const doorNumber = ref('');


const onSubmit = async (values) => {
  const {status} = await useFetch('/api/saveToSheets', {
    method: 'post',
    body: {
      name: name.value,
      lastName: lastName.value,
      birthdayDate: birthdayDate.value,
      passportNumber: passportNumber.value,
      passportIssueDate: passportIssueDate.value,
      passportIssuer: passportIssuer.value,
      street: street.value,
      houseNumber: houseNumber.value,
      doorNumber: doorNumber.value,
    }
  })
  if (status.value === 'success') {
    window.scroll({top: 0, behavior: "smooth"})
    navigateTo('/success')
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .border {
    width: 100%;
  }

  .input_block {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    label {
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0 10px;
    }
  }

  button {
    align-self: center;
    width: 300px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #1e30da;
    cursor: pointer;
    color: #fff;
    font-weight: 800;
    font-size: 16px;
  }

  .title {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .input_block {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      &:not(:last-child) {
        margin-right: 20px;
      }

      label {
        margin-bottom: 10px;
      }

      input {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 10px;
      }
    }
  }

  .address {
    // resize first div to fit the rest of the space
    div:first-child {
      flex: 50% 0 0;
    }
  }

  span {
    margin-top: 5px;
    color: red;
    font-size: 12px;
  }

  .input_block:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1280px) {
    padding: 0;
    .border {
      border: 1px solid #ccc;
      margin-bottom: 10px;
      padding: 20px;
      border-radius: 5px;
    }

    .row {
      flex-direction: column;
    }
  }
}
</style>