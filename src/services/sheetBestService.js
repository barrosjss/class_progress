const sheetBestService = {
  getSheets: async () => {
    const response = await fetch(
      "https://sheet.best/api/sheets/bfd29f56-4ca8-4972-90f3-2f95ebe8ebd9"
    );
    const data = await response.json();
    return data;
  },
};

export default sheetBestService;
