const btnSubmit = document.getElementById('btn-submit');
const row = document.getElementById('row');

btnSubmit.addEventListener('click', function() {
    const id = document.getElementById('id');
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const age = document.getElementById('age');
    const dob = document.getElementById('dob');
    const profile = document.getElementById('profile');

    
    row.innerHTML += `
                    <tr class="align-middle">
                        <td>${id.value}</td>
                        <td>${name.value}</td>
                        <td>${gender.value}</td>
                        <td>${age.value}</td>
                        <td> ${dob.value} </td>
                        <td>
                            <img style="height: 60px; width: 60px; object-fit: contain;" class="rounded-circle" src=" ${URL.createObjectURL(profile.files[0])} " alt="">
                        </td>
                        <td>
                            <button class="btn btn-primary shadow me-2"><i class="bi bi-pencil-square"></i></button>
                            <button class="btn btn-danger shadow"><i class="bi bi-x-circle"></i></button>
                        </td>
                    </tr>`;



    id.value = "";
    name.value = "";
    gender.value = "Prefer not provide";
    dob.value = "";
    profile.value = "";
    
    
})