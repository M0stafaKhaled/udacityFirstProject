// TODO: import the url check function
import checkurl from '../js/checkURL' ;
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {        
                expect(checkurl()).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
         expect(checkurl('Welocome')).toBeFalsy();
    })

    test('Testing the checkUrl function return true for valid url', () => {
         expect(checkurl('https://stackoverflow.com/questions/49603939/message-async-callback-was-not-invoked-within-the-5000-ms-timeout-specified-by'))
                 .toBeTruthy();
    })
})
