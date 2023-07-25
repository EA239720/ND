import React from 'react';

import Branch from '../../interfaces/branch';

interface GetBranchOfficeProps {
  isOpen: boolean
  onClose: () => void
  branches: Branch[]
  branch: React.Dispatch<React.SetStateAction<string>>
  change: React.Dispatch<React.SetStateAction<number>>
}

const GetBranchOffice: React.FC<GetBranchOfficeProps> = ({ isOpen, onClose, branches, branch, change }) => {

    const addBranch = (e: Branch, c: string) => {
        branch(e.id.toString())
        change(parseInt(c))
        onClose()
    }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-600 opacity-75"
        onClick={onClose}
      ></div>
      <div className="max-h-96 bg-white p-8 flex flex-col justify-start rounded shadow-lg overflow-auto z-10">
        <h2 className="text-center text-xl font-semibold mb-4">Select a Branch Office</h2>
        <table className='border-2 border-blue-400'>
            <thead className='border-2 border-blue-400'>
                <tr>
                    <th className='text-center border-2 border-blue-400'>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    branches.map((brch: Branch) => (
                        <tr className='border-2 border-blue-400 hover:bg-blue-400 hover:text-white' onClick={() => addBranch(brch, brch.change)}>
                            <td className='text-center border-2 border-blue-400'>{ brch.country }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetBranchOffice
