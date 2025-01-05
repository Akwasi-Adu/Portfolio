const blogs = [
    {
        id: 1,
        title: `Pastel Partner Error Code 20`,
        summary: "This is one of the rather common error codes that Pastel Partner users commonly encounter...",
        content: `
        <p>The infamous Pastel Error Code 20 when starting Pastel Partner.</p>
<p>
This is one of the rather common error codes that Pastel Partner users commonly encounter.
The error simply means the pervasive engine is not running.
One way of avoiding this error is to install pervasive as a service rather than an application that shows up in the system tray or notification area.
</p><p>
Follow the following steps to resolve the issue:
</p>
<p><ol>
<li>Check the system tray to see if pervasive database pre-load icon is showing</li>
<li>If not, start pervasive manually by going to Start > All Programs > Pervasive > Engines > Start Workgroup Engine</li>
<li>Try running Pastel again</li>
<li>If error persists, you might have to uninstall and reinstall pervasive again.</li>
</ol></p><p>
Do let me know if I could be of any further help, in the comments section.
</p><p>
Cheers!</p>
             `,
        categories: ["ERP","Sage Pastel"],
        date: "2014-04-15"
    }
    ,{
        id: 1,
        title: "Sage Intelligence Report Error: Missing Resource",
        summary: "The error below usually pops up in Excel 2010 or above while running a report using Sage Intelligence Reporting...",
        content: `
            <p>This error usually pops up in Excel 2010 or above while running a report using Sage Intelligence Reporting.</p>
            <img src="images/blog/sir1.png" alt="Sage Intelligence Error Screenshot">
            <p>This is a precautionary message that halts untrusted office files from being opened. Office 2010 requires files and locations of files to be validated and trusted. 
               <a href="http://support.microsoft.com/kb/973736" target="_blank">(Error message in Microsoft Office 2010: "Office has detected a problem with this file")</a>.
            </p>
            <p>In order to prevent this error, you simply need to add your "EvoBICMetaData" folder to the list of trusted locations:</p>
            <ol>
                <li>Open Excel and navigate to File > Options > Trust Center > Trust Center Settings > Trusted Locations.</li>
                <li>Click the "Add New Location" button and browse to the folder you wish to add.</li>
            </ol>
            <img src="images/blog/sir2.png" alt="Excel Trust Center Settings Screenshot">
            <p>This should allow all your Sage Intelligence reports to execute fully without the error popping up.</p>
        `,
        categories: ["Sage Evolution", "ERP", "BIC"], // Multiple categories as an array
        date: "2015-07-30"
    },
    {
        id: 5,
        title: `Sage Evolution Job Costing: Error Loading Template - "QryARFind: Field 'iCurrencyID' not found"`,
        summary: "This error pops up when a particular user in Sage Evolution attempts loading a template in the Job Costing module and persists until Evolution is restarted...",
        content: `
            <p><img src="images/blog/evojc1.png" alt="screenshot" /></p>
            <p>
            This error pops up when a particular user in Sage Evolution attempts loading a template in the Job Costing module and persists until Evolution is restarted.
            </p>
            <p>
If other users can load templates without getting the error on the same workstation, a solution would be to delete the problem user from the registry.
            </P>
            <p style="color:red">
Nb: The windows registry contains sensitive info needed for the proper functioning of your computer. You may take a backup of the registry before making any changes or get someone who is more technically apt, to help you with the steps below:
            </p>
            <p>
You do this by following the steps below:
</P>
            <ol>
                <li> On the workstation, Start "Run" and type "Regedit"</li>
                <p><img src="images/blog/evojc2.png" alt="screenshot"></P>
                <li>From the Registry Editor, Open the folder HKey Current User | User | Software | Softline | Evolution | Agents</li>
                <li>Select and delete the folder for the problem user (Rosemary, in my case)</li>
                <p><img src="images/blog/evojc3.png" alt="screenshot" /></p>
                <li>Once this is done, close the Registry Editor and re-login with the user's credentials. The problem should be resolved.</li>
                <li>Note that this resets any custom settings such as printer layouts and custom grid views for that particular and must be reset where applicable.</li>
            </Ol>
        `,
        categories: ["ERP","Sage Evolution"],
        date: "2014-09-19"
    },
    {
        id: 3,
        title: "Pastel Partner Runtime Error 75: Path/File Access Error",
        summary: "This is a permissions error. It usually occurs when the workstation doesn't have full read and write access to the pastel folder on the server...",
        content: `
            <img src="images/blog/er75.png" alt="screenshot" />
            <p>This is a permissions error. It usually occurs when the workstation doesn't have full read and write access to the pastel folder on the server.</p>

<p>Check the properties of the Pastel folder on the server and make sure its attributes haven't been set to read only. Also, check the sharing permssions and make sure that everyone or the appropriate users have full read and write access to the folder.</p>
        `,
        categories: ["ERP","Sage","Pastel"],
        date: "2014-05-20"
    },
    {
        id: 4,
        title: `Sage Evolution "Error Initialising Report Data" when running Accounts Payable Age Analysis`,
        summary: "he above error may be encountered when a user tries running the Accounts Payable Age Analysis report in Sage Pastel Evolution...",
        content: `
            <img src="images/blog/aanalysis.png" alt="screenshot" />
            <p>The above error may be encountered when a user tries running the Accounts Payable Age Analysis report in Sage Pastel Evolution.
            </p>
<p>The first probable cause of this error may be that a custom layout is being used. Corruption in the custom layout may throw this error.
</p>
<p>If a custom layout is being used, you may try previewing the report using a standard layout to see if the error still pops up. If it doesn't, then you can be sure that the error is from the custom layout. You may then review the design and code of the custom layout to isolate the cause of the error.
</p>
<p>In the unlikely event that the error still pops up, you may remedy this by creating a new evolution common database and linking it to the company. Any customizations may then be redone. </p>
        `,
        categories: ["ERP","Sage Pastel"],
        date: "2014-05-20"
    },
    {
        id:2,
        title:`Pastel Partner Error Code 161`,
        summary:`Every registered version of the Pastel Partner Software comes with a specific user license. This error means you have exceeded the number of users who are registered to log onto the system concurrently...`,
        content:`<p>Error Code 161 means you have exceeded your pervasive user count. 
Every registered version of the Pastel Partner Software comes with a specific user license. This error means you have exceeded the number of users who are registered to log onto the system concurrently.
</p><p>
If you are getting this error message despite having the appropriate number of users access the system, then a common cause could be that Pervasive hasn’t been licensed and the temporary has expired or you are running on the temporary license (one user).
</p><p>
To confirm if you have the correct number of users licenced, go to Start > All Programs >Other Utilities > License Administrator.
This opens the Pervasive Licence Administrator Tool which should show you all existing Pervasive Licenses with details of the number of users and date of expiry.</p>

<img src="images/blog/161.png" alt="screenshot" />

<p>If the License Administrator is not showing the right number of users you are licensed for, try re-registering Pastel. You could also enter your server name in the computer name field and click ‘connect’ to pull the correct license details from the server.
</p><p>
Another common cause of this error for clients running on Pervasive Workgroup versions is that one of the workstations in the workgroup with inaccurate license details (e.g. 1 user count) has logged into the system first and is locking out all other users. To confirm this, you could open the pastel company folder and search for the .LOC file. Open the .LOC file in notepad and you should see the name of the offending workstation. 
</p><p>
One way to avoid this is to use the Gateway Locator tool to assign ownership of the various Pastel Partner company databases to the server and to make sure that the server has the right license info.</p>
</p>

<img src="images/blog/1612.png" alt="screenshot" />
<p>To do this, go to Start > All Programs > Other Utilities > Gateway Locator.
Click on the button at the end of the Target Directory textbox to browse to and select the appropriate pastel company database. Click on the change button and enter the server name in the “Assign a Gateway” field  and click “Ok”
</p><p>
Do let me know if I could be of any further help, in the comments section.
</p><p>
Cheers!</p>

`,
        categories:["Pastel Partner","ERP"],
        date: "2014-04-29"
    },
    {
        id: 6,
        title: "Fixing Duplicate Invoice Numbers in Sage 200 and Sage 100 Evolution",
        summary: "A persistent bug in Sage Evolution since version 10 allows duplicate invoice numbers even with manual numbering enabled. Here's a workaround using an SQL trigger.",
        content: `
            <p>If you’ve worked with Sage 200 Evolution or Sage 100 Evolution since version 10, you may have encountered a rather annoying bug: <strong>duplicate invoice numbering</strong>. Even when you’ve set your database to use <strong>manual invoice numbering</strong> and checked the option to disallow duplicates, the system can still sneakily allow duplicate invoice numbers.</p>
    
            <p>Here's a screenshot of the configuration option where the bug seems to take effect:  
            <img src="images/blog/trigger.png" alt="Configuration option for disallowing duplicate invoice numbers"></p>
    
            <p>Frustrating, right? Even with subsequent updates, this issue persists. Over time, I realized I couldn’t keep waiting for Sage to fix it—I had to take matters into my own hands for the sake of my clients.</p>
    
            <p>So, I came up with a solution: a <strong>SQL trigger</strong> that ensures no duplicate invoice numbers are allowed when saving or posting an invoice. Let me walk you through the process.</p>
    
            <h3>How the Fix Works</h3>
            <p>The bug exists because the system doesn’t effectively validate invoice numbers when saving a document to the database. To counter this, I created a trigger on the <code>INVNUM</code> table (this is where Sage Evolution stores inventory-related documents, such as invoices).</p>
    
            <p>Here’s what the trigger does in simple terms:</p>
            <ol>
                <li><strong>Focus on Incomplete Documents:</strong> The trigger works specifically for documents with <code>DocType = 0</code>. This indicates an unsaved or "fresh" document.</li>
                <li><strong>Check for Duplicates:</strong> When a new document is saved or updated, the trigger compares the <code>InvNumber</code> of the incoming row with existing records in the table.</li>
                <li><strong>Exclude Current Row:</strong> To ensure the system doesn’t falsely flag the row being processed, it excludes the current row from the check using the primary key (<code>AutoIndex</code> in this case).</li>
                <li><strong>Raise an Error if a Duplicate Exists:</strong> If duplicates are found, the trigger raises an error, prevents the document from saving, and rolls back the transaction.</li>
            </ol>
    
            <h3>The SQL Code</h3>
            <pre>
    <code>
    -- =============================================
    -- Author:      Akwasi Adu-Kyeremeh
    -- Create date: 27 August 2024
    -- Modified date: 28 August 2024
    -- Description: Check for existing Invoice Numbers to avoid duplicates when processing invoice where manual invoice numbering is enabled
    -- =============================================
    
    CREATE TRIGGER trg_CheckInvNumber
    ON INVNUM
    AFTER INSERT, UPDATE
    AS
    BEGIN
        DECLARE @ConflictCount INT;
    
        -- Check for duplicates only when DocType is 0, and exclude the inserted/updated rows themselves
        SELECT @ConflictCount = COUNT(*)
        FROM inserted i
        JOIN INVNUM n 
            ON i.InvNumber = n.InvNumber 
            AND i.DocType = 0 -- Ensure we are only checking for DocType 0
            AND n.DocType = 0 -- Ensure the comparison is only with DocType 0 rows
            AND n.AutoIndex != i.AutoIndex;  -- Replace with your primary key column to exclude the current row
    
        IF @ConflictCount > 0
        BEGIN
            RAISERROR ('Duplicate Invoice Number detected. Please check!', 16, 1);
            ROLLBACK TRANSACTION;
        END
    END
    GO
    </code>
            </pre>
    
            <h3>Why This Works</h3>
            <p>By introducing this trigger, we ensure that the system performs the necessary validation at the database level. Even if Sage’s application logic fails to catch duplicates, this safety net ensures your records stay clean and consistent.</p>
    
            <h3>Closing Thoughts</h3>
            <p>This workaround isn’t perfect—it’s more of a patch than a permanent fix. Ideally, Sage should address this bug in future releases. But until they do, this solution has proven effective for my clients, and it might help you too!</p>
    
            <p>If you have any questions or want to share how you’ve tackled similar bugs, feel free to drop a comment below.</p>
        `,
        categories: ["ERP", "Sage Evolution", "SQL"],
        date: "2025-01-04"
    }
    
];
