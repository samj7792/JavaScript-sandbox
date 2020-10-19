// XHR Object Methods and Working with text
{
  document.getElementById('button').addEventListener('click', loadData);

  function loadData() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    console.log(xhr);

    // OPEN (type of request, filename or url we're making the request to, if async)
    xhr.open('GET', 'data.txt', true);

    console.log('READYSTATE', xhr.readyState);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function () {
      console.log('READYSTATE', xhr.readyState);
      // Insert spinner here
    };

    // If we get the ok status, this will console log our data.txt
    xhr.onload = function () {
      console.log('READYSTATE', xhr.readyState);
      if (this.status === 200) {
        console.log(this.responseText);
        document.getElementById(
          'output'
        ).innerHTML = `<h1>${this.responseText}</h1>`;
      }
    };

    // old syntax
    // xhr.onreadystatechange = function () {
    //   console.log('READYSTATE', xhr.readyState);
    //   if (this.status === 200 && this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // };

    xhr.onerror = function () {
      console.log('Request error...');
    };

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statusses
    // 200: 'OK'
    // 403: 'Forbidden'
    // 404: 'Not Found'
  }
}

// Working with Ajax and JSON
{
  document.getElementById('button1').addEventListener('click', loadCustomer);

  document.getElementById('button2').addEventListener('click', loadCustomers);

  // load customer
  function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
      if (this.status === 200) {
        console.log(this.responseText);

        const customer = JSON.parse(this.responseText);

        console.log(customer);

        const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `;

        document.getElementById('customer').innerHTML = output;
      }
    };

    xhr.send();
  }

  // load customers
  function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
      if (this.status === 200) {
        console.log(this.responseText);

        const customers = JSON.parse(this.responseText);

        console.log(customers);

        let output = '';

        customers.forEach((customer) => {
          output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `;
        });

        document.getElementById('customers').innerHTML = output;
      }
    };

    xhr.send();
  }
}
