<template>
  <div class="container">
    <h3>Create Subscription</h3>
    <table class="table" align="center">
      <tbody>
        <tr>
          <th>Amount :</th>
          <td><input type="text" name="amount" v-model="input.amount" placeholder="eg : 20" /></td>
        </tr>
        <tr> 
          <th>Subscription Type :</th>
          <td>
            <select v-model="input.subsType" v-on:change="changeItem($event)">
              <option disabled value="">Please select one</option>
              <option value="DAILY">DAILY</option>
              <option value="WEEKLY">WEEKLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </td>
        </tr>
        <tr> 
          <th>Day of week :</th>
          <td>
            <select name="daysOfWeek" v-model="input.daysOfWeek" v-bind:disabled="weekDisable">
              <option disabled value="">Please select one</option>
              <option value="1">SUNDAY</option>
              <option value="2">MONDAY</option>
              <option value="3">TUESDAY</option>
              <option value="4">WEDNESDAY</option>
              <option value="5">THURSDAY</option>
              <option value="6">FRIDAY</option>
              <option value="7">SATURDAY</option>
            </select>
          </td>
        </tr>
        <tr> 
          <th>Day of month :</th>
          <td>
            <select name="daysOfMonth" v-model="input.daysOfMonth" v-bind:disabled="monthDisable">
              <option disabled value="">Please select one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </td>
        </tr>
        <tr> 
          <th>Start Date :</th>
          <td><input type="date" name="startdate" v-model="input.startDate"/></td>
        </tr>
        <tr> 
          <th>End Date :</th>
          <td><input type="date" name="enddate" v-model="input.endDate"/></td>
        </tr>
      </tbody>
    </table> 
    <button type="button" v-on:click="create()">Create</button>
  </div> 
</template>
<script>
import axios from 'axios';
  export default {
    name: 'Create',
    data() {
      return {
        input: 
        {
          amount: "",
          subsType:"",
          daysOfWeek: "",
          daysOfMonth:"",
          startDate:"",
          endDate:""
        },
        output: 
        {
          amount: "",
          subsType:"",
          invoiceDates: []
        },
        weekDisable: true,
        monthDisable: true
      };
    },
    methods: {
      create() {
        if(this.input.amount == "" || this.input.amount <= 0) {
          alert("Amount must be greater than zero!!!");
        }else if(Date.parse(this.input.startDate) >= Date.parse(this.input.endDate)) {
          alert("End date must greater than start date!!!");
        }else if(((Date.parse(this.input.endDate) - Date.parse(this.input.startDate)) / (1000 * 3600 * 24)) > 90) {
          alert("Maximum duration is 90 days!!!");
        }else {
          axios.post('https://ezypay-api.herokuapp.com/create', {

              "amount":this.input.amount,
              "subsType": this.input.subsType,
              "dayOfWeek": this.input.daysOfWeek,
              "dayOfMonth": this.input.daysOfMonth,
              "startDate": this.input.startDate,
              "endDate": this.input.endDate

          })
          .then(function (response) {
              console.log(response);
          })
          .catch(e => {
            alert("Error in axios post : "+e);
          })
        }
      },

      changeItem(event) {
        if(event.target.value == "DAILY") {
          this.weekDisable = true;
          this.monthDisable = true;
        }else if(event.target.value == "WEEKLY") {
          this.weekDisable = false;
          this.monthDisable = true;
        }else if(event.target.value == "MONTHLY") {
          this.weekDisable = true;
          this.monthDisable = false;
        }
      }
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>