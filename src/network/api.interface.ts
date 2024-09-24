/**
 * Filename: api.interface.ts
 * Description: The interface help the api calls
 * Extentia: Copyright (c) 2021
 */
import { AxiosRequestConfig } from 'axios';

/**
 * @exports
 * @interface Config
 * @extends AxiosRequestConfig
 */
export interface Config extends AxiosRequestConfig {
    profiler: {
        startTime?: Date;
        endTime?: Date;
    };
}
/**
 * @exports BaseResponse
 */
export interface BaseResponse {
    status?: number;
    isOperational?: boolean;
    message?: string;
    time?: string;
}
