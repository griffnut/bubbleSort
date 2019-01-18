describe('Bubble Sort', function(){
   beforeAll(function() {
       spyOn(window,'swap')
   })
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual( [] );
    });
    it('is swap good', function () {
      expect(swap.calls.count()).toEqual(3);
    });
    it('is bubble correct', function () {
      expect(bubbleSort([4,3,2]).toEqual([2,3,4]))
    })
  });