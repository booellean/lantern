//==================SCRIPT FOR LANTERN V2.0=======================//
// global variables, keeps a count for behaviors and master ABD

var count;

var ABD = ['Slurred speech','Poor academic performance','Signs of hangover (bloodshot eyes, changes in pupils)','Changes in eating habits','Tremors or impaired coordination','High risk behaviors','Poor school attendance','Appears fearful, anxious, or paranoid','Sudden mood swings','Aggressive behavior','Unexplained hyperactivity','Lack of motivation','Excessive moodiness and tears','Anger and irritability','Excessive sensitivity to criticism','Difficulty concentrating','Changes in sleep patterns','Thoughts of suicide','Self-mutilation (cutting)','Feelings of worthlessness and/or helplessness','Changes in eating patterns that result in dramatic weight gain or loss','Body image issues','Unexplained aches and pains','Social isolation, abandonment of peer group','Secrecy','Isolation from family members','Excessive sleeping beyond your child’s normal fatigue or insomnia','Sudden changes in academic performance','Dramatic changes in eating habits','Loss of interest in normal activities','Social isolation','Changes in personality (becomes more aggressive, angry, withdrawn, etc.)','Make changes in their daily rituals?','Retreat from school or activities?','Experience isolation from friends?','Show a dramatic in weight, appearance and/or grades?','Wear clothing inappropriate for the weather (possibly to hide marks)?','Have visible marks or bruises?','Spend excessive amounts of time with the person they’re dating?','Spend excessive amounts of time in contact with the person they are dating through cell phones and computers?','Excessive sleeping, beyond usual teenage fatigue, which could indicate depression or substance abuse; difficulty in sleeping, insomnia, and other sleep disorders *','Loss of self-esteem','Abandonment or loss of interest in favorite pastimes','Unexpected and dramatic decline in academic performance','Weight loss and loss of appetite, which could indicate an eating disorder','Personality shifts and changes, such as aggressiveness and excess anger that are sharply out of character and could indicate psychological, drug, or sexual problems','Changes in sleep patterns','Unexpected weeping or excessive moodiness','Eating habits that result in noticeable weight loss or gain','Expressions of hopelessness or worthlessness','Paranoia and excessive secrecy','Self-mutilation, or mention of hurting himself or herself','Obsessive body-image concerns','Excessive isolation','Abandonment of friends and social groups','Avoidance of food and noticeable changes in eating habits should trigger concern.','Purging (forced vomiting) after eating — be alert for both dramatic weight loss without changes in eating habits (which could, of course, indicate other health issues that require a doctor’s attention) and also for immediate trips to the bathroom or other private spot after a meal.','Lying','Over-reactive arguing','An awkward phase', 'Defiance','Abandoning commitments','Withdrawal','Attitude. “Teenager” and “bad attitude”','Impulsivity','Academic problems','Curfew violations'];

//================================================================//
//event listeners

window.addEventListener('load', appendOptions);
document.getElementById('add-behavior', pushBehaviorToList);

//================================================================//

function appendOptions() {
  var datList = document.getElementById('behavior-options');
  
  ABD.sort(compareName);
  
  for(var i=0;i<ABD.length;++i){
    var newOpt = document.createElement('option');
    newOpt.value = ABD[i];
    
    datList.append(newOpt);
    console.log(newOpt);
  }
  
  console.log(ABD);
}

//================================================================//
//This functions sorts array items so it is always in alphabetical order

function compareName(a,b) {   
    if (a.toLowerCase() < b.toLowerCase()) return -1;   
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}

//================================================================//
//This function creates a list of behaviors when selected

function pushBehaviorToList() {
  //This will push the selected behavior to a list with a remove button if needed
}