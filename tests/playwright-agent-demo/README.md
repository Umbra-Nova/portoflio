# Playwright Demo Project: Playwright Agents: Planner, Generator, and Healer

## Introduction

Playwright released three agents on version 1.56. These agents use the Playwright MCP to help accelerate the planning of test plans (Planner), generating test files with test blocks (Generator), and a healer for when a test fails it can inspect to see where or what went wrong (Healer).

I will be using an e-commerce site to create a simple test suite. The goal here is to mainly get an understanding of the agents and learn how I can use them advantageously in my future work.

## Build

1. Testing Site: [Presta Shop](https://demo.prestashop.com/#/en/front)
2. Playwright Agents
   - Planner
     - Plan a User Story for UAT testing
     - Create a file of test scenarios and cases
   - Generator
     - Generates test files of specific scenarios
     - Generates test blocks within the test files of test the planned test cases
   - Healer
     - Will code review before pushing any code
     - Will review failed tests and see where it went wrong
3. Language: Typescript

## Lessons Learned

### Lesson 1

The Planner couldn't create files for some reasons so I tried to changed its configurations thinking it would apply to all of the agents. I was deeply mistaken and acknowledged there are specific reasons why each agent has their permissions.

**Resolution:** Had it do a fix diagnostic on itself. With the ability to create and edit files it was able to edit itself back to normal. For safety though I deleted the agent files and re-ran the init command.

**Thoughts:** I probably should have used the Healer.

**Conclusion:** I thought I had to fix the file because the file says there are 9+ errors, however it pushed just fine. After some further research, come to find out, it was VSCode's evaluation setting. So I turned it off the evaluation setting. Here I learned more understanding of the config settings of the agents as well as a setting in VSCode.

### Lesson 2

I asked the Generator agent to create test files for the purchase user story and test plan. After reviewing some of the code I can already see some issues like using `await page.waitForLoadState(1000)` which is not best practices at all, even though the agent claimed to use playwright best practices. On the plus side, it atleast will comment out the purpose of certain blocks of code and admits that the outcomes might be different thank originally coded. I feel like this is what sets up the QA Engineer to be the expert and making sure to revise the code for quality purposes. (I just sounded like an automated customer support robot, I know.)

I applied the Healer agent to code review the test file. I had it list me all the issues from the test files as well as solutions to apply. It provided fixes that I would've applied myself. It even fixed the networkidle loadstart to just waiting for 1 second before the next execution. The agent also created POM's too!

Here is a table it created before I agreed for it to apply the fixes.

![Summary table of the code review displaying 4 columns with headings Issue, Severity, Files Affected, Impact. The table has 8 rows. Row 1, Issue: Overly generic selectors, Severity: High, Files Affected: All files, Impact: Test fail on element mismatch. Row 2, Issue: Flaky timing, Severity: High, Files Affected: All files, Impact: Random faillures, slow tests. Row 3, Issue: Hard-coded credentials, Severity: High, Files Affected: purchase-logged-in-checkout.spec.ts, Impact: Tests fail if account doesn't exist. Row 4, Issues: Non-unique test emails, Severity: Medium, Files Affected: account-registration-validation.spec.ts, Impact: Duplicate email errors. Row 5, Issue: Error swallowing (.catch), Severity: Medium, Files Affected: All files, Impact: Masks real failures. Row 6, Issue: Code duplication, Severity: Medium, Files Affected: all purchase test files, Impact: Maintenance burden. Row 7, Issue: Missing visibility checks, Severity: Medium, Files Affected: All files, Impact: Premature interactions. Row 8, Inconsistent patters, Severity: Low, Files Affected: All files, Impact: confusing to maintain.](image.png)

**Conclusion:** Looks like the healer has its limits depending on what agent it uses to do the subtasking. With Claude it provides a more quality output and execution. Unfortuantely I am not paying for the API just yet. Using free agents from OpenRouter can do some justice but still misses the mark for high level best practices for playwright. With Claude it caught the networkidle waits as an error but the free agent used, Openai:gpt-oss-120b(free), left those waits, or add them, into the code. Thus proving that having the right agent for the mcp to work with will affect the quality of the output.

### Lesson 3
