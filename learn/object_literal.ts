type object_key_number = {[key in number]: number}
type object_index_number = {[key: number]: number}
type object_key_string = {[key in string]: number}
type object_index_string = {[key: string]: number}

const k_key_number: keyof object_key_number = 1
const k_index_number: keyof object_index_number = 1
const k_key_string: keyof object_key_string = ""

/** That's the point */
const k_index_string: keyof object_index_string = 1
