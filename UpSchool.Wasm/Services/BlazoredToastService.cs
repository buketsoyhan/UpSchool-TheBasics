﻿using Blazored.Toast.Configuration;
using Blazored.Toast.Services;
using UpSchool.Domain.Services;

namespace UpSchool.Wasm.Services
{
    public class BlazoredToastService:IToasterService
    {
        private readonly IToastService _toastService;

        public BlazoredToastService(IToastService toastService)
        {
            _toastService = toastService;
        }

        public void ShowError(string message)
        {
            _toastService.ShowError(message);
        }

        public void ShowSuccess(string message)
        {
            _toastService.ShowSuccess(message);
        }
    }
}
