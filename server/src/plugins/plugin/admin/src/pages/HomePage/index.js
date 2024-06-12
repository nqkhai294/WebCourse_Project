import { DateTimePicker } from '@strapi/design-system/DateTimePicker';
import { Button, Box, Alert } from '@strapi/design-system';
import React, { useEffect, useState } from 'react';
import './index.css';
import pluginId from '../../pluginId';
import { apiUrl } from '../../utils/getTrad';
import XLSX from 'xlsx';

const HomePage = () => {
  const url = apiUrl + '/api/students';
  const url2 = apiUrl + '/api/register-dates/1';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer e2a41cdacd1c813ab20bac113275c1258145dbd9498936cfabf10d28460d7c2db6ad3fc3b4734bbed031d4ba26eed2f5a004ee0d3ebb919f403719cd10353d3da5756f1967aa542eea5f94128d899fff7d84c5e5e5df968e6ef08081d547c6d7e774649760c7933f352bdce2901d4e6633ae9682462e3de86dc6696d80483925`
  };

  const [date1, setValue] = useState();
  const [date2, setValue2] = useState();
  const [success, setSuccess] = useState(false);

  console.log('HomePage');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url2, {
          method: 'GET',
          headers: headers
        });
        const data = await response.json();
        console.log(data);
        setValue(new Date(data.data.attributes.open));
        setValue2(new Date(data.data.attributes.close));
        console.log(data.data.attributes.open);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  async function get_data_from_endpoint(url) {
    let response = await fetch(url, {
      method: 'GET',
      headers: headers
    });
    let data = await response.json();
    return data;
  }

  const handleSubmmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url2, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ data: { open: date1, close: date2 }})
      });
      const data = await response.json();
      console.log(data);
      console.log(response);
      setSuccess(true);
    } catch (e) {
      console.error(e);
    }
  }

  const handleExport = async (e) => {
    e.preventDefault();
    try {
      const responseData = await get_data_from_endpoint(url);
      if (!responseData || !responseData.data) {
        throw new Error("No data found in response");
      }

      const raw_data = responseData.data;
      console.log(raw_data);
      const prez = raw_data;
      const rows = prez.map(row => ({
        name: row.attributes.username,
        email: row.attributes.email,
        role: row.attributes.role,
        level: row.attributes.level,
        birth: row.attributes.birth,
        phone: row.attributes.phone,
        gender: row.attributes.gender,
        purpose: row.attributes.purpose,
      }));
      const worksheet = XLSX.utils.json_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

      /* fix headers */
      XLSX.utils.sheet_add_aoa(worksheet, [["Name", "email", "role", "level", "birth", "phone", "gender", "purpose"]], { origin: "A1" });

      /* calculate column width */
      const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
      worksheet["!cols"] = [{ wch: max_width }];

      /* create an XLSX file and try to save to Presidents.xlsx */
      XLSX.writeFile(workbook, "Student.xlsx", { compression: true });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='container mt-4'>
      <div className='form-group'>
        <DateTimePicker label="Open at" locale="en-GB" value={date1} onChange={setValue} onClear={() => setValue(undefined)} />
      </div>
      <div className='form-group'>
        <DateTimePicker label="Close at" locale="en-GB" value={date2} onChange={setValue2} onClear={() => setValue2(undefined)} />
      </div>
      <div>
        <Button className='btn btn-primary' onClick={(e) => handleSubmmit(e)}>
          Submit register date
        </Button>
      </div>
      <div>
        <Button className='btn btn-primary' onClick={(e) => handleExport(e)}>
          Export students data to file
        </Button>
      </div>
      {success && (
        <Box style={{ width: 700, marginTop: 20 }}>
          <Alert closeLabel="Close" title="Title" variant="success" onClose={() => setSuccess(false)}>
            Register dates updated successfully!
          </Alert>
        </Box>
      )}
    </div>
  );
};

export default HomePage;
