# Rubbish API Integration with Google Sheets via Zapier

Welcome to the guide on how to integrate Rubbish's "Get all Issues" route with Salesforce using Zapier. This step-by-step tutorial will help you automatically populate Salesforce CRM with opportunities, or any salesforce object, from the Rubbish app. Customize the details in your CRM with your preferred data, and the Rubbish API will fill each associated field automatically.

This documentation applies to all Zapier integrations, including getting all incident report tickets, getting rubbish runs completed on the Rubbish app, as well as getting specific movement information about a specific rubbish run.

Before we start, here's the necessary route information:

Routes:

- `https://qr-dev.rubbish.love/public/api/v1/reports/{:teamId}/get`
- `https://qr-dev.rubbish.love/public/api/v1/runs/{:teamId}/get`
- `https://qr-dev.rubbish.love/public/api/v1/runs/{:teamId}/movement/{:runId}`

Required: Bearer token

## Table of Contents

- [Step 1: Create a Zap](#create-zap)
- [Step 2: Create a Trigger](#create-trigger)
- [Step 3: Create an Action](#create-action)

<a name="create-zap"></a>

## Step 1: Create a Zap

From the Zapier dashboard, click "Create a Zap".

<a name="create-trigger"></a>

## Step 2: Create a Trigger

1. Find the Rubbish app in the search area.
   ![1. Find the rubbish app](../Rubbish-APIs/screenshots/step1.png)

<br/>

2. In the field that prompts you to choose an event, select "Get all issues", and click "Next".
   ![2. Get all issues](../Rubbish-APIs/screenshots/step2.png)

<br/>

3. Now, create a Rubbish account. A new window will open prompting you to enter your Bearer token.
   ![3. Rubbish app login](../Rubbish-APIs/screenshots/step3.png)
   ![4. Rubbish app login](../Rubbish-APIs/screenshots/step4.png)
   <br>\* Note: Email the Rubbish team if you don't have a Bearer token to log in.

<br/>

4. Once the account is approved, proceed to the next step and test the trigger to ensure you are receiving incident tickets. If successful, continue to the next step.
   ![5. Test the trigger to ensure proper response](../Rubbish-APIs/screenshots/step5.png)

<br/>

<a name="create-action"></a>

## Step 3: Salesforce - integration from scratch

To begin with the integration process, ensure that you have a designated space within Salesforce for the integration and subsequent storage of submission data. These instructions will walk you through the basic setup of such a space. You can tailor these steps to meet your unique requirements within Salesforce.

The example we'll use here involves creating an account that signifies submission tickets.

1. Start by navigating to Salesforce and creating a new account tab. This will form the basis for your submission tickets.
   ![1. Create a new account tab](../Rubbish-APIs/screenshots/Salesforce-1.png)

<br/>

2. Proceed to set up this new account. Follow the on-screen prompts to fill in all necessary account details.
   ![1. Create the new account](../Rubbish-APIs/screenshots/Salesforce-2.png)

<br/>

3. Once the account has been established, head over to the Opportunities tab. This is where you'll be able to manage and monitor your submission tickets.
   ![1. Go to the opportunities tab](../Rubbish-APIs/screenshots/Salesforce-3.png)

<br/>

## Step 4: Creating an Action in Zapier

The next step involves defining an action in Zapier. This action is essentially a command that gets triggered when a specific event occurs.

1.  Choose Salesforce as the application where the action should occur.
    ![Select Salesforce as the action event](../Rubbish-APIs/screenshots/ZapSal-1.png)

<br/>

2.  Choose 'Create a Record' as the specific event that should trigger this action.
    ![Select the event - create a record](../Rubbish-APIs/screenshots/ZapSal-2.png)

<br/>

3.  Authenticate your Salesforce account by logging in within Zapier.
    ![Log in to your Salesforce account](../Rubbish-APIs/screenshots/ZapSal-3.png)

<br/>

4.  Choose 'Opportunity' as the object that should be created when the action gets triggered.
    ![Select the object you would like to create - opportunity in this case](../Rubbish-APIs/screenshots/ZapSal-4.png)

<br/>

5.  Link the action to the account you want the opportunities to be added to.
    ![Select the account to add the opportunities to](../Rubbish-APIs/screenshots/ZapSal-5.png)

<br/>

6.  Now, you need to define what information goes into these opportunities. Fill out the fields with the appropriate data.
    ![Fill out the appropriate fields](../Rubbish-APIs/screenshots/ZapSal-6.png)

<br/>

7.  Continue to complete all other necessary fields.
    ![Fill out the appropriate fields](../Rubbish-APIs/screenshots/ZapSal-7.png)

<br/>

8.  Once you've set everything up, it's time to test your Zap to ensure it functions as expected.
    ![Test your zap](../Rubbish-APIs/screenshots/ZapSal-8.png)

<br/>

9.  Perform another test to validate the results.
    ![Test your zap](../Rubbish-APIs/screenshots/ZapSal-9.png)

<br/>

10. Visit your Salesforce account to verify the test result. You should be able to see the output of the test there.
    ![Check Salesforce to make sure you see the test](../Rubbish-APIs/screenshots/ZapSal-10.png)

<br/>

11. If the test runs successfully, go ahead and publish your Zap. This action will set it live, and it will start running as per the defined triggers and actions.
    ![Publish your zap](../Rubbish-APIs/screenshots/ZapSal-11.png)

<br/>

Congratulations! Salesforce will now update periodically with data from the Rubbish API.
