

const normalAttack = 10;
const normalMonsterAttack = 15;
const StrongMonsterAttack = 20;
const healPlayer = 15;

const userEnteredValue = prompt("Enter the health") ;

let choseMaxLife = parseInt(userEnteredValue);
if(isNaN(choseMaxLife) || choseMaxLife <= 0){
    alert("You have not entered a valid number \nMonsters are set to default Health")
    choseMaxLife = 100;
}
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;
let battleLog = [];
adjustHealthBars(choseMaxLife);

attackBtn.addEventListener("click",function(){
   let damage =  dealMonsterDamage(normalAttack);
   attackMonster(damage)

})

strongAttackBtn.addEventListener("click",function(){
    let strongAttack = dealMonsterDamage(StrongMonsterAttack);
    attackMonster(strongAttack)
})

healBtn.addEventListener("click",function(){
     if(currentPlayerHealth < choseMaxLife){
        increasePlayerHealth(healPlayer);
        currentPlayerHealth += healPlayer;
     }
     
})


function reset(){
    currentPlayerHealth =choseMaxLife;
    currentMonsterHealth = choseMaxLife;
    resetGame(choseMaxLife);
}


function attackMonster(typeOfAttack){
    currentMonsterHealth = currentMonsterHealth - typeOfAttack;
    let playerDamage = dealPlayerDamage(normalMonsterAttack);
    let bonushHealthUsed = currentPlayerHealth;
        currentPlayerHealth -= playerDamage;
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = bonushHealthUsed;
        increasePlayerHealth(bonushHealthUsed);
        alert("Bonus Life Used");
    }
    console.log(currentPlayerHealth);
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
       alert("you won");
       reset();
   }else if(currentPlayerHealth <=0 && currentMonsterHealth >0){
        alert("you lose");
        reset();
   }    if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("you have a draw");
        reset();
}

}