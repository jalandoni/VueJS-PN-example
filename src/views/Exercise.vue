<template>
  <div class="exercisePage">
    <!-- For the template part you need to work inside the TODO don't touche to the instructions line part 
     --------- Instructions -->
    <div class="requirementContent">
      <div class="titleRequirement">Instructions</div>
      <div class="requirements">
        <ol>
          <li>Display the recipe's title in the middle of the page and in bold</li>
          <li>Display the ingredients using 'v-for'</li>
          <li>
            Add to the recipe object a element for know the complexity of the recipe,
            this complexity need to be a number between 0 and 10.
          </li>
          <li>
            If the complexity is between 0 and 3 you need to display : "difficulty : EASY" <br/>
            If the complexity is more than 3 and less or equal than 7 you need to display : "difficulty : NORMAL" <br/>
            If the complexity is more than 7 you need to display : "difficulty : DIFFICULT"<br/>
            Use 'v-if'
          </li>
          <li>
            Oops ! I forget the milk, add this ingredient when you click on a button.
          </li>
        </ol>
      </div>
    </div>
    <!-- --------- End Of the Instructions part -->

    <div class='Exercise'>
      <center><h1>{{recipe.title}}</h1></center>
          <ul v-for='item in recipe.ingredients' v-bind:key="item.text">
        <li> 
            {{item}}
        </li>
    </ul>
      <div class="if">
    <p v-if="0"> {{ isEasyMessage}} </p>
    <p v-if="6"> {{ isNormalMessage }} </p>
  </div>
  <div class="button">
    <button v-on:click= milk >milk</button>
    <p>You add {{milk}}</p>
    
  </div>

      <!-- TODO -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Exercise',
    data(){
      return{
        isEasy : false,
        isEasyMessage :'Easy',
        isNormal : true,
        isNormalMessage :'Normal',
        milk:null,
        recipe : {
          title: "Crêpes",
          ingredients: [ "eggs", "flour", "sugar"]
        }
        
      }
    }
  }
</script>

<style scoped>
    .exercisePage{
        display:grid;
        grid-template-columns: 1fr 2fr;
        height: calc(100% - 50px);
    }

    .requirementContent{
      padding: 20px;
      background-color: var(--guide-line-bg);
    }

    .exerciseResultPart{
      padding: 20px;
    }

    li{
      padding-bottom: 10px;
    }
</style>