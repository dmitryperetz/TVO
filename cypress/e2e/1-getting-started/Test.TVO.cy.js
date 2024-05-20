describe('site navigate', () => {
    it('passes', () => {
      cy.viewport(1024, 768)
      cy.visit('https://tvolearn.com/')
      cy.get('h1').should('be.visible')
      // cy.wait(2000)

      // Navigate to Learning Resources (K-12) dropdown
      cy.get('#SiteNav > :nth-child(1) > .site-nav__link--main > .site-nav__label').click();
      // cy.wait(1000)

      // Choose a grade level between 1 and 12 (e.g., Grade 5)
      cy.get(':nth-child(6) > .site-nav__link').click();

      // Choose card 
      cy.get('#s-f86769ab-9136-4a8e-b032-1d0ef871edb4').click();

      // validate page is loaded 
      cy.get('h1').should('be.visible')
      cy.get('h2').should('be.visible')
      cy.get('h3').should('be.visible')

      

    })
  })

//   Test cases (Title , Steps , expected result)

//   1. Open URL 

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//   validate page is loaded 
  
//   Result : 
//   Page is loaded with no errors
  
//     2.  Navigate to the "Learning Resources (K-12)"

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//  tap on "Learning Resources (K-12)" button
  
//   Result : 
//   Menu opens with all available grade's 
  
//     3.  choose grade from list

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//  tap on "Learning Resources (K-12)" button
//  select any grade 
  
//   Result : 
//   Grade page opened with all available options  
  
//     4.  Select any Card from available options 

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//  tap on "Learning Resources (K-12)" button
//  select any grade 
//  select any card 
  
//   Result : 
//   card page opened with all available options 

//     5.  Validated if H1 loaded as expected  

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//  tap on "Learning Resources (K-12)" button
//  select any grade 
//  select any card 
//  validate H1 loaded as expected with no error 
  
//   Result : 
// page loaded with no errors 

//     6.  Validated if H1 loaded as expected  

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//  tap on "Learning Resources (K-12)" button
//  select any grade 
//  select any card 
//  validate H2 loaded as expected with no error 
  
//   Result : 
// page loaded with no errors 


//     7.  Validated if H1 loaded as expected  

//   precondition : win10 , chrome (latest version)

//   Steps : 
//   open chrome 
//   navigate to https://tvolearn.com/
//  tap on "Learning Resources (K-12)" button
//  select any grade 
//  select any card 
//  validate H3 loaded as expected with no error 
  
//   Result : 
// page loaded with no errors 


// Error handilng --- added in \support\e2e.js