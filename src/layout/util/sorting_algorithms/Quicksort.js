const LinkedList = require('../data_structures/LinkedList.js');

function Quicksort(){

}

Quicksort.get_object_at =  function(list, i){
    if( list instanceof []){
        return list[i];
    }
    else if(list instanceof LinkedList){
        return list.get_object_at(i);
    }
};

Quicksort.set_object_at =  function(list, i, value){
    if( list instanceof []){
        list[i] = value;
    }
    else if(list instanceof LinkedList){
        list.set_object_at(i, value);
    }
};

Quicksort.quicksort = function(list, comparison_fn){

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (! ( (list instanceof LinkedList) || ( list instanceof []))){
        return;
    }

    if(comparison_fn === undefined){
        comparison_fn = Quicksort.compare;
    }
    var end_index;

    if (list instanceof LinkedList){
        end_index = list.size();
    }
    else if( list instanceof [] ){
        end_index = list.length-1;
    }

    // Prevent empty lists or arrays.
    if (end_index >= 0){
        Quicksort.quicksort_between_indices(0, end_index);
    }

};


Quicksort.quicksort_between_indices = function(list, low, high, comparison_fn){

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (! ( (list instanceof LinkedList) || ( list instanceof []))){
        return;
    }

    if(comparison_fn === undefined){
        comparison_fn = Quicksort.compare;
    }

    var i = low;
    var j = high;
    var middleIndex = ( i + j ) / 2;
    var middle = Quicksort.get_object_at(list, middleIndex);

    do
    {

        while (comparison_fn(Quicksort.get_object_at(list, i), middle)){

            i++;

        }

        while (comparison_fn(middle, Quicksort.get_object_at(list, j))){

            j--;

        }

        if (i <= j){

            var temp = Quicksort.get_object_at(list, i);
            Quicksort.set_object_at(list, i, Quicksort.getObjectAt(j));
            Quicksort.set_object_at(list, j, temp);
            i++;
            j--;

        }

    } while (i<=j);

    if( low < j ){

        Quicksort.quicksort_between_indices(low, j);

    }

    if( high > i){

        Quicksort.quicksort_between_indices(i, high);

    }

};

// this function must be overriden for sorting different data types(e.g. string, integer etc.)
Quicksort.compare = function(a,b){
    return b > a;
};


module.exports = Quicksort;