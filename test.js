let locators = require('./locators.js');
let Base = require('./basePage.js');
let testData= require('./testData.json');


describe('Weather suite tests', function () {

     
     beforeEach(function() {
         
         browser.waitForAngularEnabled(false);
         Base.navigateToHome();
         browser.manage().window().maximize();
         browser.manage().timeouts().implicitlyWait(12000)
         locators._10Days.click();
     });
     
     afterEach(function() {
         browser.sleep(2000)
         
     });
         

     it('Test No1 Checking temp for today', function() {
        expect(locators.day_1.isDisplayed()).toBe(true);
        locators.day_1.getText().then(function (text) {
            let tem=parseInt(text.slice(0,2));
            if(tem>20){
                console.log("Test Passed")
            }else{
                console.log("Test Failed");
            }     
        })   
    });
    

    it('Test No2 Checking the temp for day 2', function (diffirence) {
        expect(locators.day_2Max.isDisplayed()).toBe(true);
        expect(locators.day_2Min.isDisplayed()).toBe(true);
        locators.day_2Max.getText().then(function(max){
            locators.day_2Min.getText().then(function(min){
                 diffirence = parseInt(max.slice(0,2) - min.slice(0,2));
                 if(diffirence<=20){
                     console.log("Test Passed")
                 }else{
                     console.log("Test Falied")
                 }
            });
        });      
    });


    
    it('Test No3 Checking the max and min temp for day 3',  function(diffirence) {
        expect(locators.day_3Max.isDisplayed()).toBe(true);
        expect(locators.day_3Min.isDisplayed()).toBe(true);
         locators.day_3Max.getText().then(function(max){
            locators.day_3Min.getText().then(function(min){
                diffirence=parseInt(max.slice(0,2) - min.slice(0,2));
                if(diffirence<=20){
                    console.log("Test Passed");
                }else{
                    console.log("Test Failed");
                }
            });
        });       
    });

    
    it('Test No4 Checking the max and min temp for day 4', function(diffirence) {
        expect(locators.day_4Max.isDisplayed()).toBe(true);
        expect(locators.day_4Min.isDisplayed()).toBe(true);
        locators.day_4Max.getText().then(function(max){
            locators.day_4Min.getText().then(function(min){
                diffirence=parseInt(max.slice(0,2) - min.slice(0,2));
                if(diffirence<=20){
                    console.log("Test Passed");
                }else{
                    console.log("Test Failed");
                }
            });
        });      
    });

    
    it('Test No5 Checking the max and min temp for day 5', function(MAX,MIN, diffirence) {
        expect(locators.day_5Max.isDisplayed()).toBe(true);
        expect(locators.day_5Min.isDisplayed()).toBe(true);
        locators.day_5Max.getText().then(function(max){      
            MAX=parseInt(max.slice(0,2));
        });
        locators.day_5Min.getText().then(function(min){ 
            MIN=parseInt(min.slice(0,2));
        });
        diffirence=MAX-MIN;
        if(diffirence<=20){
            console.log("Test Passed");
        }else{
            console.log("Test Failed");
        }      
    });

    it('Test No6 Checking the max and min temp for day 6', async (diffirence)=> {
        expect(locators.day_6Max.isDisplayed()).toBe(true);
        expect(locators.day_6Min.isDisplayed()).toBe(true);
        await locators.day_6Max.getText().then(function (max) {
            locators.day_6Min.getText().then(function (min) {
                diffirence = parseInt(max.slice(0, 2) - min.slice(0, 2));
                if (diffirence <= 20) {
                    console.log("Test Passed");
                } else {
                    console.log("Test Failed");
                }
            });
        });
    });


    it('Test No7 Checking the max and min temp for day 7', async (diffirence) =>{
        expect(locators.day_7Max.isDisplayed()).toBe(true);
        expect(locators.day_7Min.isDisplayed()).toBe(true);
        await locators.day_7Max.getText().then(function (max) {
            locators.day_7Min.getText().then(function (min) {
                diffirence = parseInt(max.slice(0, 2) - min.slice(0, 2));
                console.log(diffirence)
                if (diffirence <= 20) {
                    console.log("Test Passed");
                } else {
                    console.log("Test Failed");
                }
            });
        });
    });

    it('Test No8 Checking the max and min temp for day 8', async () =>{
        expect(locators.day_8Max.isDisplayed()).toBe(true);
        expect(locators.day_8Min.isDisplayed()).toBe(true);
        await locators.day_8Max.getText().then(function(max){
            var A=parseInt(max.slice(0,2));
            locators.day_8Min.getText().then(function (min) {
                var B = parseInt(min.slice(0, 2));
                var result=A-B;
                if(result<=20){
                    console.log("Test Passed");
                }else{
                    console.log("Test Failed");
                }
            });
        });
    });

    it('Test No9 Checking the max and min temp for day 9', async () => {
        expect(locators.day_9Max.isDisplayed()).toBe(true);
        expect(locators.day_9Min.isDisplayed()).toBe(true);
        await locators.day_9Max.getText().then(function (max) {
            var A = parseInt(max.slice(0, 2));
            locators.day_9Min.getText().then(function (min) {
                var B = parseInt(min.slice(0, 2));
                var result = A - B;
                if (result <= 20) {
                    console.log("Test Passed");
                } else {
                    console.log("Test Failed");
                }
            });
        });
    });

    it('Test No10 Checking the max and min temp for day 10', async () => {
        expect(locators.day_10Max.isDisplayed()).toBe(true);
        expect(locators.day_10Min.isDisplayed()).toBe(true);
        await locators.day_10Max.getText().then(function (max) {
            var A = parseInt(max.slice(0, 2));
            locators.day_10Min.getText().then(function (min) {
                var B = parseInt(min.slice(0, 2));
                var result = A - B;
                if (result <= 20) {
                    console.log("Test Passed");
                } else {
                    console.log("Test Failed");
                }
            });
        });
    });
        
        
        
        
});