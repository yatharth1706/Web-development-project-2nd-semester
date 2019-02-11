function mapp(arr, fn){
	const newArr=[]

	arr.forEach(function(val){
		newArr.push(fn(val))
	})

	return newArr
}

function addOne(num){ return num+1}

const x=[0,1,2,3]

console.log(addOne(3))