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
            <img src="portfolio/images/blog/sir1.png" alt="Sage Intelligence Error Screenshot">
            <p>This is a precautionary message that halts untrusted office files from being opened. Office 2010 requires files and locations of files to be validated and trusted. 
               <a href="http://support.microsoft.com/kb/973736" target="_blank">(Error message in Microsoft Office 2010: "Office has detected a problem with this file")</a>.
            </p>
            <p>In order to prevent this error, you simply need to add your "EvoBICMetaData" folder to the list of trusted locations:</p>
            <ol>
                <li>Open Excel and navigate to File > Options > Trust Center > Trust Center Settings > Trusted Locations.</li>
                <li>Click the "Add New Location" button and browse to the folder you wish to add.</li>
            </ol>
            <img src="portfolio/images/blog/sir2.png" alt="Excel Trust Center Settings Screenshot">
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
            <p><img src="portfolio/images/blog/evojc1.png" alt="screenshot" /></p>
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
                <p><img src="portfolio/images/blog/evojc2.png" alt="screenshot"></P>
                <li>From the Registry Editor, Open the folder HKey Current User | User | Software | Softline | Evolution | Agents</li>
                <li>Select and delete the folder for the problem user (Rosemary, in my case)</li>
                <p><img src="portfolio/images/blog/evojc3.png" alt="screenshot" /></p>
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
            <img src="portfolio/images/blog/er75.png" alt="screenshot" />
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
            <img src="portfolio/images/blog/aanalysis.png" alt="screenshot" />
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

<img src="portfolio/images/blog/161.png" alt="screenshot" />

<p>If the License Administrator is not showing the right number of users you are licensed for, try re-registering Pastel. You could also enter your server name in the computer name field and click ‘connect’ to pull the correct license details from the server.
</p><p>
Another common cause of this error for clients running on Pervasive Workgroup versions is that one of the workstations in the workgroup with inaccurate license details (e.g. 1 user count) has logged into the system first and is locking out all other users. To confirm this, you could open the pastel company folder and search for the .LOC file. Open the .LOC file in notepad and you should see the name of the offending workstation. 
</p><p>
One way to avoid this is to use the Gateway Locator tool to assign ownership of the various Pastel Partner company databases to the server and to make sure that the server has the right license info.</p>
</p>

<img src="portfolio/images/blog/1612.png" alt="screenshot" />
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
            <img src="portfolio/images/blog/trigger.png" alt="Configuration option for disallowing duplicate invoice numbers"></p>
    
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
    },
    {
        id: 8,
        title: `AI in ERP: A Transformation That's Reshaping the Workforce`,
        date: `2025-05-22`,
        categories: ["ERP","AI"],
        summary: "When Microsoft embedded Copilot into Dynamics 365 or SAP introduced AI-driven cash application matching in S/4HANA, it wasn't just about new features—it was a signal that the future of enterprise technology is here...",
    content: `
        <p>When Microsoft embedded Copilot into Dynamics 365 or SAP introduced AI-driven cash application matching in S/4HANA, it wasn't just about new features—it was a signal that the <em>future of enterprise technology is here</em>.</p>
        
        <p>And it's rewriting the rules of work.</p>
        
        <p>From predictive insights to automated workflows, AI is fundamentally altering how ERP systems, business solutions, and software development are built and staffed.</p>
        
        <p>As someone who has implemented ERP systems across sectors, I'm seeing a shift: <strong>Companies aren't just adopting AI—they're reorganizing around it.</strong> That includes rethinking who does what, and which roles even exist.</p>
        
        <h3>Real-World AI in ERP: What's Actually Changing</h3>
        <p>AI in ERP is no longer hypothetical. It's being deployed, now:</p>
        
        <ul>
            <li><strong>SAP S/4HANA</strong> uses machine learning to clear open receivables, reducing manual reconciliation.</li>
            <li><strong>Oracle ERP Cloud</strong> leverages AI for intelligent procurement and audit automation.</li>
            <li><strong>Microsoft Dynamics 365 Copilot</strong> drafts emails, summarizes data, and suggests actions based on ERP records.</li>
        </ul>
        
        <p><em>Gartner predicts that by 2026, over 50% of ERP implementations will include embedded AI—up from just 5% in 2022.</em></p>
        
        <h3>What It Means for ERP Professionals & Developers</h3>
        <p>The value chain is shifting from doing → directing → designing.</p>
        
        <ul>
            <li>ERP professionals now need <strong>AI and data literacy</strong>—not just module experience</li>
            <li>Developers are evolving into <strong>AI-integrating architects</strong>, not just coders</li>
            <li>Functional consultants must now <strong>connect AI tools with business strategy</strong></li>
        </ul>
        
        <h3>But It's Not All Smooth Sailing</h3>
        <p>Yes, AI is powerful—but it's not plug-and-play.</p>
        
        <ul>
            <li><strong>Data privacy & compliance</strong> challenges (GDPR, SOC2)</li>
            <li><strong>Legacy system integration</strong> and poor data quality</li>
            <li><strong>Over-reliance on automation</strong> without critical oversight</li>
        </ul>
        
        <p>This is where human judgment matters most.</p>
        
        <h3>What Organizations Should Be Doing</h3>
        <ol>
            <li><strong>Upskill ERP teams</strong> in AI concepts, data awareness, and solutioning</li>
            <li><strong>Shift roles</strong> from repetitive tasks to decision-support and governance</li>
            <li><strong>Double down on change management</strong>—not just tools, but people</li>
        </ol>
        
        <h3>What Professionals Can Do Now</h3>
        <ul>
            <li>Learn how AI is being integrated into your stack (SAP, Oracle, Dynamics, etc.)</li>
            <li>Understand data structure, flow, and governance</li>
            <li>Move from "execution" to <strong>strategy and insight</strong></li>
        </ul>
        
        <h3>Final Thoughts</h3>
        <p>AI isn't coming. It's here. It's already reshaping roles, responsibilities, and entire workflows in ERP and enterprise tech.</p>
        
        <p>How are <em>you</em> adapting? What's changing in your industry?</p>
        
        <p>Let's connect and share experiences. The future of work is evolving rapidly, and those who adapt will lead the transformation.</p>
    `
      },

      {
        id: 9999999999,
        title: `Portfolio Launch: Welcome to akwasi.dev!`,
        date: `2025-03-31`,
        categories: ["Announcements"],
        summary: `I'm thrilled to launch my personal portfolio site — akwasi.dev! Built with HTML, JavaScript, and hosted on GitHub Pages, this platform showcases the projects I've worked on, technologies I love, and insights through my blog.`,
        content: `The journey of building this site was part professional, part personal. From setting up GitHub Pages, configuring analytics, email forwarding, custom domains, to making everything responsive, it's been a labor of love. This site marks a new chapter in showcasing my work and connecting with fellow developers, clients, and creatives around the world.\n\nI'm excited to keep publishing helpful content, deep dives into ERP and enterprise solutions, and lessons learned from real-world development.`
      },


      {
        id: 7,
        title: "Bulk Unapplication of Customer Invoices in Business Central",
        summary: "Unapplying customer invoices tied to payments in bulk isn't directly supported in the BC UI — but here’s how I tackled it with AL code, a report, and a config package workaround.",
        date: "2025-04-16",
        categories: ["Business Central", "AL", "ERP", "Tips"],
        content: `
      <p>A friend on a Business Central-focused WhatsApp group I belong to asked this question:</p>
      
      <p><em>"Hi guys. Hoping y'all are doing great. Just a question... Is there anyone here who knows how to do bulk unapplication of customer invoices that are already tied to customer payments?"</em></p>
      
      <p><strong>My thoughts:</strong><br>
      Yes! In Microsoft Dynamics 365 Business Central, you <strong>can</strong> unapply customer invoices that are already applied to payments — even in bulk — but the system doesn't natively support bulk unapplication through the standard UI. You’ll have to get creative. Here are a few approaches I shared:</p>
      
      <h3>Option 1: Manual Unapplication (Standard Way)</h3>
      <p>This is straightforward, but tedious if you’re dealing with more than a handful of records:</p>
      <ol>
      <li>Go to <strong>Customer > Ledger Entries</strong>.</li>
      <li>Find the payment or invoice you want to unapply.</li>
      <li>Click <strong>Process > Unapply Entries</strong>.</li>
      <li>Confirm unapplication.</li>
      </ol>
      <p>It works, but it’s slow for high volumes.</p>
      
      <h3>Option 2: Use a Configuration Package (Advanced)</h3>
      <p>If you're feeling bold, you can technically unapply entries using a config package and Excel.</p>
      <ol>
      <li>Create a config package and add table <code>379 - Detailed Cust. Ledg. Entry</code>.</li>
      <li>Export entries where <code>Applied Entry to Entry No.</code> &gt; 0.</li>
      <li>In Excel, clear the following fields: 
      <code>Applied Entry to Entry No.</code>, 
      <code>Application Type</code>, 
      <code>Application Date</code>.</li>
      <li>Import the Excel file back and apply the package.</li>
      </ol>
      <p><strong>Important:</strong> This method can cause inconsistencies if related fields (like <code>Amount Remaining</code>) are not recalculated properly. Use only in sandbox or with full data backups.</p>
      
      <h3>Option 3: AL Code for Safe Bulk Unapply</h3>
      <p>This is the cleanest way to handle bulk unapplication if you’re a developer or working with one.</p>
      
      <p>Here’s the core AL procedure I used:</p>
      <pre><code>
      procedure BulkUnapplyCustomerEntries(CustomerNo: Code[20])
      var
          CustLedgerEntry: Record "Cust. Ledger Entry";
          CustUnapply: Codeunit "CustUnapplyPostedEntries";
          UnappliedCount: Integer;
      begin
          UnappliedCount := 0;
          CustLedgerEntry.Reset();
          CustLedgerEntry.SetRange("Customer No.", CustomerNo);
          CustLedgerEntry.SetRange(Open, false);
          if CustLedgerEntry.FindSet() then
              repeat
                  if CustLedgerEntry."Applied Entries Exist" then begin
                      CustUnapply.Unapply(CustLedgerEntry);
                      UnappliedCount += 1;
                  end;
              until CustLedgerEntry.Next() = 0;
      
          Message('Successfully unapplied %1 entries for customer %2', UnappliedCount, CustomerNo);
      end;
      </code></pre>
      
      <p>I then wrapped this in a custom page so I could run it from the BC UI:</p>
      
      <h3>AL Page: Bulk Unapply from Customer List</h3>
      <p>This allows you to click a button on a customer and unapply all entries for that customer.</p>
      <pre><code>
      page 50100 "Bulk Customer Unapply"
      {
          PageType = List;
          SourceTable = Customer;
          ApplicationArea = All;
          UsageCategory = Tasks;
      
          layout
          {
              area(content)
              {
                  repeater(Group)
                  {
                      field("No."; "No.") { }
                      field(Name; Name) { }
                  }
              }
          }
      
          actions
          {
              area(processing)
              {
                  action(BulkUnapply)
                  {
                      Caption = 'Bulk Unapply Entries';
                      trigger OnAction()
                      var
                          CustLedgerEntry: Record "Cust. Ledger Entry";
                          CustUnapply: Codeunit "CustUnapplyPostedEntries";
                          UnappliedCount: Integer;
                      begin
                          if not Confirm('Are you sure?', false) then exit;
      
                          CustLedgerEntry.SetRange("Customer No.", Rec."No.");
                          CustLedgerEntry.SetRange(Open, false);
                          if CustLedgerEntry.FindSet() then
                              repeat
                                  if CustLedgerEntry."Applied Entries Exist" then begin
                                      CustUnapply.Unapply(CustLedgerEntry);
                                      UnappliedCount += 1;
                                  end;
                              until CustLedgerEntry.Next() = 0;
      
                          Message('Unapplied %1 entries.', UnappliedCount);
                      end;
                  }
              }
          }
      }
      </code></pre>
      
      <h3>Bonus: Report for Background Execution</h3>
      <p>This report version can be scheduled or filtered for multiple customers and date ranges:</p>
      <pre><code>
      report 50101 "Bulk Unapply Customer Entries"
      {
          ProcessingOnly = true;
      
          dataset
          {
              dataitem(Customer; Customer)
              {
                  RequestFilterFields = "No.";
      
                  dataitem("Cust. Ledger Entry"; "Cust. Ledger Entry")
                  {
                      DataItemLink = "Customer No." = Customer."No.";
                      DataItemTableView = WHERE(Open = CONST(false), "Applied Entries Exist" = CONST(true));
                      RequestFilterFields = "Posting Date";
      
                      trigger OnAfterGetRecord()
                      var
                          CustUnapply: Codeunit "CustUnapplyPostedEntries";
                      begin
                          CustUnapply.Unapply(Rec);
                          TotalUnapplied += 1;
                      end;
                  }
              }
          }
      
          trigger OnPostReport()
          begin
              Message('Unapplied %1 entries in total.', TotalUnapplied);
          end;
      
          var
              TotalUnapplied: Integer;
      }
      </code></pre>
      
      <h3>Closing Thoughts</h3>
      <p>If you only have a few entries, stick with the standard UI. For power users or mass cleanup, the AL extension route is safest. The config package trick should only be used if you know what you're doing — and never on production data without testing.</p>
      
      <p>Hope this helps someone else facing the same challenge! Cheers!</p>
        `
      },

      {
        id: 9,
        title: "Fixing 'Conversion failed when converting date and/or time from character string' in Sage Intelligence Reporting",
        summary: "If you run Sage Intelligence reports and hit this error, especially in September, it may be caused by Windows regional month abbreviations. Here’s why it happens and how to fix it.",
        date: "2025-09-05",
        categories: ["Sage Evolution", "Sage Intelligence", "SQL Server", "Tips"],
        content: `
      <p>If you’ve ever run a report in <strong>Sage Intelligence Reporting</strong> (BIC) and been stopped by this error:</p>

      <pre><code>
      [Microsoft][ODBC SQL Server Driver][SQL Server]
      Conversion failed when converting date and/or time from character string.
      </code></pre>

      <img src="portfolio/images/blog/sir3.png" alt="Sage Intelligence Error Screenshot">

      <p>You know how frustrating it is. The error shows up in the Sage Intelligence <em>Report Execution Error</em> dialog, with SQL State 22008 and Driver Error 241.</p>

      <h3>🔍 What’s going on?</h3>
      <p>Sage Intelligence generates SQL queries behind the scenes based on the report parameters you enter. For example, if you filter by dates in September, it may build SQL like this:</p>

      <pre><code>
      WHERE dStartDate &gt;= '01-Sept-2025'
        AND dStartDate &lt;= '30-Sept-2025'
      </code></pre>

      <p>The problem? SQL Server does not recognize <code>Sept</code> as a valid month abbreviation. It only accepts <code>Sep</code> (three letters) or the full <code>September</code>. As a result, the query fails and you see the conversion error.</p>

      <h3>🤔 Why does Sage use “Sept”?</h3>
      <p>Sage Intelligence is Excel-based and relies on <strong>Windows regional settings</strong> to format dates. Depending on your locale:</p>
      <ul>
        <li>English (US, UK) → <code>Sep</code></li>
        <li>English (Ghana, South Africa) → <code>Sept</code></li>
      </ul>
      <p>That small difference is enough to break reports every September.</p>

      <h3>🛠 Solutions</h3>

      <h4>1. Change Windows regional format</h4>
      <p>Switch your PC’s regional format to English (United States) or English (United Kingdom). Both use <code>Sep</code>, which SQL Server understands. This is quick but changes date formats across Windows and Excel.</p>

      <h4>2. Registry override (recommended)</h4>
      <p>You can override month abbreviations for your Windows user account by adding the following registry entries:</p>

      <pre><code>
      Windows Registry Editor Version 5.00

      [HKEY_CURRENT_USER\Control Panel\International]
      "sAbbrevMonthNames"="Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec;"
      "sMonthNames"="January;February;March;April;May;June;July;August;September;October;November;December;"
      </code></pre>

      <p><strong>How to apply:</strong></p>
      <ol>
        <li>Copy the text into Notepad.</li>
        <li>Save as <code>Fix_Sage_Sept_Abbreviation.reg</code> (Save as type = All Files).</li>
        <li>Double-click it and confirm.</li>
        <li>Sign out or reboot Windows.</li>
      </ol>

      <h4>3. Quick batch script</h4>
      <p>For non-technical users, a batch file can apply the same fix automatically:</p>

      <pre><code>
      @echo off
      echo.
      echo Applying fix for Sage Intelligence September abbreviation issue...
      echo.

      REM Create a temporary .reg file
      &gt; "%temp%\\Fix_Sage_Sept_Abbreviation.reg" echo Windows Registry Editor Version 5.00
      &gt;&gt;"%temp%\\Fix_Sage_Sept_Abbreviation.reg" echo.
      &gt;&gt;"%temp%\\Fix_Sage_Sept_Abbreviation.reg" echo [HKEY_CURRENT_USER\\Control Panel\\International]
      &gt;&gt;"%temp%\\Fix_Sage_Sept_Abbreviation.reg" echo "sAbbrevMonthNames"="Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec;"
      &gt;&gt;"%temp%\\Fix_Sage_Sept_Abbreviation.reg" echo "sMonthNames"="January;February;March;April;May;June;July;August;September;October;November;December;"

      REM Import into registry
      reg import "%temp%\\Fix_Sage_Sept_Abbreviation.reg"

      echo.
      echo Done! Please sign out and sign back in (or reboot) for changes to take effect.
      pause
      </code></pre>

      <p>Save this as <code>Fix_Sage_Sept_Abbreviation.bat</code>, run it once, and restart your PC.</p>

      <h3>📥 Download Ready-Made Fix</h3>
      <p>For convenience, I’ve packaged both the registry file and batch script into a single zip you can download here:</p>
      <p><a href="/downloads/Sage_Intelligence_Sep_Fix.zip">👉 Download Sage Intelligence September Fix</a></p>

      <h3>⚠️ Notes & Caveats</h3>
      <ul>
        <li>This fix changes abbreviations for the <strong>current Windows user</strong>. If Sage Intelligence runs on a server, apply it on the server account too.</li>
        <li>Always back up your registry first (right-click key → Export).</li>
        <li>Changing regional settings or registry values can affect other apps. Test before rolling out widely.</li>
      </ul>

      <h3>✅ Takeaway</h3>
      <p>If you hit “Conversion failed when converting date and/or time from character string” in Sage Intelligence Reporting, check if your report is filtered on September dates. In many locales, Windows uses <code>Sept</code> instead of <code>Sep</code>, and SQL Server rejects it. Overriding the abbreviation fixes the error permanently.</p>
        `
}

      
      
    
];
window.projects = blogs;