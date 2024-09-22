import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import Link from "next/link"
import { role, incidentsData } from "@/lib/data";

type Incident = {
  id: number;
  category: string;
  title: string;
  date: string;
  students: string[];
  comments: string;
}

const columns = [
  {
    header: "Title", accessor:"title"
  },
  {
    header: "Category", accessor:"category"
  },
  {
    header: "Students", accessor:"students", className: "hidden md:table-cell"
  },
  {
    header: "Date", accessor:"date", className: "hidden md:table-cell"
  },
  {
    header: "Comments", accessor:"comments", className: "hidden md:table-cell"
  },
  {
    header: "Actions", accessor:"actions"
  }
];

const IncidentListPage = () => {

  const renderRow = (item:Incident ) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.title}</h3>
        </div>
      </td>
      <td>{item.category}</td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.comments}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/lessons/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolSky">
              <Image src="/edit.png" alt="" width={16} height={16}/>
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolPurple">
            <Image src="/delete.png" alt="" width={16} height={16}/>
          </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Incidents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/plus.png" alt="" width={14} height={14}/>
            </button>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={incidentsData}/>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default IncidentListPage