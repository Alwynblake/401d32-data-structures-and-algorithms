'use strict';

const LinkedList = require('../ll_merge/index.js');

describe('testing ll_merge method', () => {
  test('testing that ll_merge method zips together 2 linkedLists', () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(5);
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);
    let zippedList = new LinkedList().mergeLists(ll1, ll2);
    expect(zippedList.value).toEqual(1);
    expect(zippedList.next.value).toEqual(2);
    expect(zippedList.next.next.value).toEqual(3);
    expect(zippedList.next.next.next.value).toEqual(4);
    expect(zippedList.next.next.next.next.value).toEqual(5);
    expect(zippedList.next.next.next.next.next.value).toEqual(6);
    expect(zippedList.next.next.next.next.next.next).toEqual(null);
  });

  test('testing that ll_merge method throws a TypeError if linkedList1 is not an object', () => {
    let ll1 = 'linkedList1 is not a valid data type';
    let ll2 = new LinkedList();
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);
    expect(() => {
      new LinkedList().mergeLists(ll1, ll2);
    }).toThrow();
  });

  test('testing that ll_merge method throws a TypeError if linkedList2 is not an object', () => {
    let ll1 = new LinkedList();
    let ll2 = 'linkedList2 is not a valid data type';
    ll1.append(1);
    ll1.append(3);
    ll1.append(5);
    expect(() => {
      new LinkedList().mergeLists(ll1, ll2);
    }).toThrow();
  });
});