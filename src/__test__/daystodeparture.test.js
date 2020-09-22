import {date_diff_indays} from '../client/js/daystodeparture'


test('Test date_diff_indays function to produce difference in days', () => {
    let date1 = '2020-09-10';
    let date2 = '2020-09-15';
    expect(date_diff_indays(date1,date2)).toBe(5);
});
