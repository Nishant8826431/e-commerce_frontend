
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{

    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsbyId(id) {
  return new Promise(async (resolve) =>{

    const response = await fetch("http://localhost:8080/products/"+id)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchAllProductsByFilters(filter,sort, pagination) {
  //filter = 

  //filter 
  let queryString = '';

  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length ){
      const lasCategoryValue = categoryValues[categoryValues.length- 1]
      queryString += `${key}=${lasCategoryValue}&`
    }
  
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }


  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }


  return new Promise(async (resolve) =>{

    const response = await fetch("http://localhost:8080/products?" + queryString)
    const data = await response.json()
    const totalItems =  response.headers.get('X-Total-Count')
    
    resolve({data:{product:data, totalItems:totalItems}})
  }
  );
}

export function fetchAllCategories() {
  return new Promise(async (resolve) =>{

    const response = await fetch("http://localhost:8080/categories")
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchAllBrands() {
  return new Promise(async (resolve) =>{

    const response = await fetch("http://localhost:8080/brands")
    const data = await response.json()
    resolve({data})
  }
  );
}
