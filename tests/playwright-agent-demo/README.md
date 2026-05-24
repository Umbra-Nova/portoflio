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

**Problem 1:** The Healer couldn't create files for some reasons so I tried to changed its configurations thinking it would apply to all of the agents. I was deeply mistaken and acknowledged there are specific reasons why each agent has their permissions.

**Resolution:** Had it do a fix diagnostic on itself. With the ability to create and edit files it was able to edit itself back to normal.

**Thoughts:** I probably should have used the Healer.
